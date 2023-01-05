from app import db
import requests
import json
from models import Progress
from random import randint

import openai
       
def generate_image_url():
  img_url=""
  lst = ["Earth", "Mars", "Mercury", "Venus", "Jupiter", "Saturn", "Uranus", "Venus"]
  params = {'q': lst[randint(0,7)], 'description': '', 'media_type': 'image'}
  r = requests.get("https://images-api.nasa.gov/search", params=params)

  if r.status_code == 200:
    img_url = json.loads(r.content)
    img_url = img_url['collection']['items'][1]['links'][0]['href']

  return img_url

def openai_response(context, question, answer):
	response = openai.Completion.create(
	model="text-davinci-003",
	prompt="Evaluate an answer for a question given certain information. Limit response to the context given.\n\nContext: {context}\nQuestion: {question}\nAnswer: {answer}\n".format(context=context, question=question, answer=answer),
	temperature=0.2,
	max_tokens=256,
	top_p=1,
	frequency_penalty=0,
	presence_penalty=0
	)
	return response.choices[0].text

def sort(progress, course):
	progress_idx=0
	course_idx=0
	# sort
	while progress_idx <= (len(progress.progress)-1):
		if course_idx > (len(course.content)-1):
			progress.progress.pop(progress_idx) #delete saved progress
			course_idx=0
		elif progress.progress[progress_idx]['id'] != course.content[course_idx]['id']:
			course_idx+=1 #continue to next course element
		else:
			if progress_idx == course_idx: # If at same index continue sorting
				progress_idx+=1
				course_idx=0
			else: #swap
				if course_idx > (len(progress.progress)-1):
					starting_index = len(progress.progress)
					for i in range(course_idx-(len(progress.progress)-1)):
						item=course.content[starting_index]
						if  item['type']== 'Question':
							progress.progress.append({"viewed": False, "answer": "", "feedback": "", "id": item['id']})
						else:
							progress.progress.append({"viewed": False, "id": item['id']})
					# adding clone
					progress.progress[course_idx] = progress.progress[progress_idx]
					item=course.content[progress_idx]
					if  item['type']== 'Question':
						progress.progress[progress_idx] = {"viewed": False, "answer": "", "feedback": "", "id": item['id']}
					else:
						progress.progress[progress_idx] = {"viewed": False, "id": item['id']}
					# skipping clone
					progress_idx+=1
				else:
					if not progress.progress[course_idx]["viewed"]:
						# adding clone
						progress.progress[course_idx] = progress.progress[progress_idx]
						item=course.content[progress_idx]
						if  item['type']== 'Question':
							progress.progress[progress_idx] = {"viewed": False, "answer": "", "feedback": "", "id": item['id']}
						else:
							progress.progress[progress_idx] = {"viewed": False, "id": item['id']}
						# skipping clone
						progress_idx+=1
					else:
						progress_at_new_idx = progress.progress[course_idx]
						progress.progress[course_idx] = progress.progress[progress_idx]
						progress.progress[progress_idx] = progress_at_new_idx
						course_idx=0

	if len(course.content) > len(progress.progress):
		starting_index = len(progress.progress)
		for i in range(len(course.content)-len(progress.progress)):
			item=course.content[starting_index+i]
			if  item['type']== 'Question':
				progress.progress.append({"viewed": False, "answer": "", "feedback": "", "id": item['id']})
			else:
				progress.progress.append({"viewed": False, "id": item['id']})

	progress.version=course.version

def get_or_create(model, **kwargs):
	"""
	Get or create instance.
	"""
	instance = db.session.query(model).filter_by(**kwargs).first()
	if instance is None:
		instance = create_instance(model, **kwargs)	
	return instance

def create_instance(model, course_content=[], **kwargs):
	"""
	Create instance.
	"""
	instance = model(**kwargs)

	if model == Progress:
		for item in course_content:
			if item['type'] == 'Question':
				instance.progress.append({"viewed": False, "answer": "", "feedback": "", "id": item['id']})
			else:
				instance.progress.append({"viewed": False, "id": item['id']})

	db.session.add(instance)
	db.session.commit()

def classifier(prompt):
    response = openai.Completion.create(
    model="ada:ft-nstituto-tecnol-gico-y-de-estudios-superiores-de-monterrey-2023-01-03-05-01-28",
    prompt=prompt+' ->',
    max_tokens=1
	)

    q_class = response.choices[0].text
    q_class = q_class.strip()
    if (q_class == 'a'):
        return 'Fact Recall'
    elif (q_class == 's'):
        return 'Low Convergent'
    elif (q_class == 'd'):
        return 'High Convergent'
    elif (q_class == 'f'):
        return 'Low Divergent'
    elif (q_class == 'g'):
        return 'High Divergent'
    else:
        return '...'

def fact_evaluator(text, answer):
	response = openai.Completion.create(
	model="text-davinci-003",
	prompt="""Describe what parts of an attempt to an answer are missing from the correct answer. 
	If none classify it as complete.\nCorrect Answer: Generally, the process involves filing a notice 
	of appeal with the court, preparing a written brief outlining the legal arguments for the appeal, 
	and appearing in court for oral arguments.\nAttempt: The appellant must submit documents detailing 
	why the decision should be overturned.\nFeedback: Correct, as well  the process also involves  preparing 
	a written brief outlining the legal arguments for the appeal, and appearing in court for oral arguments.
	\n\nCorrect Answer: {}\nAttempt: {}\nFeedback:""".format(text, answer),
	temperature=0.2,
	max_tokens=256,
	top_p=1,
	frequency_penalty=0,
	presence_penalty=0
	)

	return response.choices[0].text

def divergent_evaluator(restrictions, answer):
	response = openai.Completion.create(
	model="text-davinci-003",
	prompt="""Evaluate whether certain restrictions are satisfied or not.
	\n\nRestrictions: Must be focused on young people. Must have some relevance 
	to science and technology. Must be an activity\nText to evaluate: Creating 
	videogames with science and technology tematics.\nEvaluation: 3/3. 
	Acceptable\n\nRestrictions: Must be an action. Must be related to education. 
	Must address reduction on money. Must address equity.\nText to evaluate: I would make education 
	free for everyone.\nEvaluation: 3/4. It does not address equity.\n\nRestrictions:{}\nText to evaluate: {}\nEvaluation:""".format(restrictions, answer),
	temperature=0.2,
	max_tokens=256,
	top_p=1,
	frequency_penalty=0,
	presence_penalty=0
	)

	return response.choices[0].text
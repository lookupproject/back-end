from app import db
import requests
import json
from models import Progress
from random import randint

       
def generate_image_url():
  img_url=""
  lst = ["Earth", "Mars", "Mercury", "Venus", "Jupiter", "Saturn", "Uranus", "Venus"]
  params = {'q': lst[randint(0,7)], 'description': '', 'media_type': 'image'}
  r = requests.get("https://images-api.nasa.gov/search", params=params)

  if r.status_code == 200:
    img_url = json.loads(r.content)
    img_url = img_url['collection']['items'][1]['links'][0]['href']

  return img_url

def generate_prompt(reference, answer):
  return (f"""
    You are an intelligent, charismatic and cheerful AI teacher. You have the task to decide whether or not a question was correctly answered. If you decide an answer is incorrect, provide feedback about why, be concrete. 

    Correct Answer: A vector is an object that has both a magnitude and a direction. 
    Provided Aswer: A vector is a number that has a direction.
    Feedback: Mostly correct! Remember a vector has a magnitude as well.
    
    Correct Answer: {reference}.
    Provided Answer: {answer}.
    Feedback:"""
  )

def sort(progress, course):
	progress_idx=0
	course_idx=0

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
				progress_at_new_idx = progress.progress[course_idx]
				progress.progress[course_idx] = progress.progress[progress_idx]
				progress.progress[progress_idx] = progress_at_new_idx
				course_idx=0
	if len(course.content) > len(progress.progress):
		starting_index = len(progress.progress)
		for i in range(len(course.content)-len(progress.progress)):
			print("THIS IS COURSE CONTENT LENGTH {}, THIS IS REQUESTED INDEX {}".format(len(course.content), starting_index+i))
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

from setuptools import find_packages, setup

setup(
    name='back-end',
    version='1.0.0',
    description='Backend for web app',
    url='https://www.lookup-project.com',
    author='Hector Reyes',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'flask',
    ],
)
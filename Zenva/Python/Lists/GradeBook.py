#This poject simulates a student trying to organize their gradebook
#this project showcases knowledge of lists

last_semester_gradebook = [("politics", 80), ("latin", 96), ("dance", 97), ("architecture", 65)]

#list of subjects the student is taking
subjects = ['physics', 'calculus', 'poetry', 'history']
#list of students grades
grades = [98, 97, 85, 88]

#appending new courses
subjects.append('computer science')
grades.append(100)
#combines previous two lists
gradebook = list(zip(subjects, grades))
gradebook.append(("visual arts", 93))
print(gradebook)
full_gradebook = gradebook + last_semester_gradebook
print(full_gradebook)
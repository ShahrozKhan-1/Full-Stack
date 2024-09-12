def calculate_final_grade(scores):
    final_grades = {}

    assignment_weight = 0.30
    midterm_weight = 0.30
    final_exam_weight = 0.40

    for student, score in scores.items():
        final_grade = (score["Assignment"] * assignment_weight +
                       score["Midterm"] * midterm_weight +
                       score["Final Exam"] * final_exam_weight)
        
        if final_grade >= 90:
            letter_grade = 'A'
        elif final_grade >= 80:
            letter_grade = 'B'
        elif final_grade >= 70:
            letter_grade = 'C'
        elif final_grade >= 60:
            letter_grade = 'D'
        else:
            letter_grade = 'F'

        final_grades[student] = letter_grade

    return final_grades

student_scores = {
    "Alice": {"Assignment": 85, "Midterm": 78, "Final Exam": 92},
    "Bob": {"Assignment": 90, "Midterm": 88, "Final Exam": 84},
    "Charlie": {"Assignment": 70, "Midterm": 65, "Final Exam": 75},
    "David": {"Assignment": 60, "Midterm": 58, "Final Exam": 55},
    "Eva": {"Assignment": 95, "Midterm": 92, "Final Exam": 96}
}

def main():
    final_grades = calculate_final_grade(student_scores)
    print("Final Grades:")
    for student, grade in final_grades.items():
        print(f"{student}: {grade}")

if __name__ == "__main__":
    main()

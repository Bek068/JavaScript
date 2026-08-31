#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define STUDENT_COUNT 6
#define SUBJECT_COUNT 3

typedef struct {
    char name[32];
    int scores[SUBJECT_COUNT];
    double average;
    char grade;
} Student;

static double calculate_average(const int scores[], size_t count) {
    int total = 0;

    for (size_t index = 0; index < count; index++) {
        total += scores[index];
    }

    return (double) total / count;
}

static char calculate_grade(double average) {
    if (average >= 90.0) {
        return 'A';
    }
    if (average >= 80.0) {
        return 'B';
    }
    if (average >= 70.0) {
        return 'C';
    }
    if (average >= 60.0) {
        return 'D';
    }
    return 'F';
}

static int compare_students(const void *left, const void *right) {
    const Student *first = left;
    const Student *second = right;

    if (first->average < second->average) {
        return 1;
    }
    if (first->average > second->average) {
        return -1;
    }
    return strcmp(first->name, second->name);
}

static Student *find_student(Student students[], size_t count, const char *name) {
    for (size_t index = 0; index < count; index++) {
        if (strcmp(students[index].name, name) == 0) {
            return &students[index];
        }
    }

    return NULL;
}

static void print_report(const Student students[], size_t count) {
    printf("\nStudent report\n");
    printf("----------------------------------------\n");
    printf("%-16s %8s %5s\n", "Name", "Average", "Grade");
    printf("----------------------------------------\n");

    for (size_t index = 0; index < count; index++) {
        printf("%-16s %8.2f %5c\n",
               students[index].name,
               students[index].average,
               students[index].grade);
    }
}

int main(void) {
    const char *names[STUDENT_COUNT] = {
        "Aisha", "Bruno", "Clara", "Diego", "Elena", "Farah"
    };
    const int score_data[STUDENT_COUNT][SUBJECT_COUNT] = {
        {92, 88, 95},
        {76, 84, 81},
        {99, 94, 97},
        {61, 73, 68},
        {87, 90, 85},
        {54, 66, 59}
    };
    Student *students = calloc(STUDENT_COUNT, sizeof(*students));

    if (students == NULL) {
        fprintf(stderr, "Error: could not allocate student data.\n");
        return EXIT_FAILURE;
    }

    for (size_t index = 0; index < STUDENT_COUNT; index++) {
        snprintf(students[index].name, sizeof(students[index].name), "%s", names[index]);
        memcpy(students[index].scores, score_data[index], sizeof(score_data[index]));
        students[index].average = calculate_average(students[index].scores, SUBJECT_COUNT);
        students[index].grade = calculate_grade(students[index].average);
    }

    qsort(students, STUDENT_COUNT, sizeof(*students), compare_students);
    print_report(students, STUDENT_COUNT);

    Student *found = find_student(students, STUDENT_COUNT, "Elena");
    if (found != NULL) {
        printf("\nLookup: %s has grade %c with an average of %.2f.\n",
               found->name, found->grade, found->average);
    }

    double class_total = 0.0;
    for (size_t index = 0; index < STUDENT_COUNT; index++) {
        class_total += students[index].average;
    }
    printf("Class average: %.2f\n", class_total / STUDENT_COUNT);

    free(students);
    return EXIT_SUCCESS;
}
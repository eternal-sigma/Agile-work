package com.example.xidianProject;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    private final StudentJPARepository studentJPARepository;

    public StudentService(StudentJPARepository studentJPARepository) {
        this.studentJPARepository = studentJPARepository;
    }

    public List<Student> getStudents() {
        return studentJPARepository.getAllStudents();
    }
}
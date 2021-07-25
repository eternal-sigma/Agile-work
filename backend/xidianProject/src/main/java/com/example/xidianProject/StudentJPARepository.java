package com.example.xidianProject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentJPARepository extends JpaRepository<Student, Integer> {
    @Query(nativeQuery = true, value = "select * from student")
    List<Student> getAllStudents();
}
package com.example.xidianProject;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "student")
@Getter
@Setter
public class Student {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String academy;
    private String email;
    private String name;
}
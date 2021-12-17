package com.systex.springboot.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "task_table")
public class TaskTable implements Serializable {

    @Id
    @SequenceGenerator(name = "task_seq")
    @Column(name = "task_seq")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(name = "task_name", length = 255)
    String taskName;

    @Column(name = "description", length = 255)
    String description;

    public Integer getTaskSeq() {
        return id;
    }

    public void setTaskSeq(Integer taskSeq) {
        this.id = taskSeq;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

package com.systex.springboot.controller;

import com.systex.springboot.model.TaskTable;
import com.systex.springboot.repository.TaskTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class MyBootController {
    @Autowired
    private TaskTableRepository taskRepository;

    @GetMapping(value = "/")
    @ResponseBody
    public List<TaskTable> findAll() {

        return taskRepository.findAll();

    }

    @PostMapping(value = "/")
    @ResponseBody
    public List<TaskTable> addTask(@RequestBody TaskTable input) {

        taskRepository.save(input);

        return taskRepository.findAll();

    }

    @DeleteMapping(value = "/{task.seq}")
    @ResponseBody
    public List<TaskTable> delete(@PathVariable("task.seq") int seq){

        taskRepository.deleteById(seq);
        return taskRepository.findAll();

    }

    @PutMapping (value = "/")
    @ResponseBody
    public List<TaskTable> delete(@RequestBody TaskTable input){
        System.out.println(777776);
        taskRepository.save(input);
        System.out.println(77777);
        return taskRepository.findAll();

    }

}
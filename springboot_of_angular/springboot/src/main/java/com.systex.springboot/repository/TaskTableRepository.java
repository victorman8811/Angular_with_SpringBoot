package com.systex.springboot.repository;

import com.systex.springboot.model.TaskTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskTableRepository extends JpaRepository<TaskTable, Integer> {
}

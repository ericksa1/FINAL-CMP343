package com.fitness.tracker;

import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkoutRepository extends JpaRepository<Workout, Long> {
  // Add custom query methods if needed
}

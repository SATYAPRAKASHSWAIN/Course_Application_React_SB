package com.springrest.springrest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.entity.Course;
import com.springrest.springrest.repository.CoursesRepository;

@Service
public class CoursesServiceImpl implements CourseService {

	@Autowired
	private CoursesRepository coursesRepo;

	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		return coursesRepo.findAll();
	}

	@Override
	public Course getCourseById(long coursesId) {

		return coursesRepo.findById(coursesId).get();
	}

	@Override
	public Course addCourse(Course course) {

		return coursesRepo.save(course);
	}

	@Override
	public Course updateCourse(Course course) {
		return coursesRepo.save(course);
	}

	@Override
	public void deleteCourses(long long1) {
		coursesRepo.deleteById(long1);

	}

}

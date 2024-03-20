package com.springrest.springrest.service;

import java.util.List;

import com.springrest.springrest.entity.Course;

public interface CourseService {

	List<Course> getCourses();

	Course getCourseById(long coursesId);

	Course addCourse(Course course);

	Course updateCourse(Course course);

	void deleteCourses(long long1);

	

}

package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entity.Course;
import com.springrest.springrest.service.CourseService;



@RestController
@CrossOrigin
public class MyController {

	@Autowired
	private CourseService courseService;

	@GetMapping("/home")
	public String home() {
		return "Welcome to course application";
	}

	// get the courses
	@GetMapping("/courses")
	public List<Course> getCourses() {

		return this.courseService.getCourses();
	}

	@GetMapping("/courses/{coursesId}")
	public Course getCourseById(@PathVariable("coursesId") long coursesId) {
		return this.courseService.getCourseById(coursesId);

	}

	@PostMapping(path = "/courses", consumes = "application/json")
	public Course addCourse(@RequestBody Course course) {
		return this.courseService.addCourse(course);
	}

	@PutMapping(path = "/courses", consumes = "application/json")
	public Course saveCourses(@RequestBody Course course) {
		return this.courseService.updateCourse(course);
	}

	@DeleteMapping(path = "/courses/{id}")
	public ResponseEntity<HttpStatus> deleteCourses(@PathVariable long id) {
		System.out.println("satya"+id);
		try {
			this.courseService.deleteCourses((id));
			return new ResponseEntity<>(HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}

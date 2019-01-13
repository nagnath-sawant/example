package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class StudentAdmissionController {

	@RequestMapping(value = "/admissionForm.html", method = RequestMethod.GET)
	public ModelAndView getAdmissionForm() {

		ModelAndView model = new ModelAndView("AdmissionForm");

//		model.addObject("headerMessage","Indian Institute of Technology, Mumbai");

		return model;
	}

	@RequestMapping(value = "/submitAdmissionForm.html", method = RequestMethod.POST)
	public ModelAndView submitAdmissionForm(@ModelAttribute("student1") Student student1) {
		ModelAndView model = new ModelAndView("AdmissionSuccess");
//		model.addObject("headerMessage","Indian Institute of Technology, Mumbai");

		return model;
	}

	/**
	 * This method gets called before any other request handler method.
	 * It adds attribute into add object of this class
	 * @param model
	 */
	@ModelAttribute
	public void addCommonObjects(Model model) {
		model.addAttribute("headerMessage", "Indian Institute of Technology, Mumbai");
	}

	/*
	 * Using traditional-normal way to map attributes to model
	 * 
	 * @RequestMapping(value="/submitAdmissionForm.html", method =
	 * RequestMethod.POST) public ModelAndView
	 * submitAdmissionForm(@RequestParam(name="studentName", defaultValue="MR. ABC")
	 * String name , @RequestParam(name="studentHobby",defaultValue="No" ) String
	 * hobby) {
	 * 
	 * Student student1 = new Student(); student1.setStudentName(name);
	 * student1.setStudentHobby(hobby);
	 * 
	 * ModelAndView model = new ModelAndView("AdmissionSuccess");
	 * model.addObject("headerMessage","Indian Institute of Technology, Mumbai");
	 * model.addObject("student1", student1);
	 * 
	 * return model; }
	 * 
	 */
}

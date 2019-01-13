package com.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;



@Controller
@RequestMapping("/greet")
class HelloController{
	
	@RequestMapping("/welcome")
	public ModelAndView helloWorld() {
		
		// HelloPage is the view name, which is used to detect view 
		ModelAndView modelAndView = new ModelAndView("HelloPage");
		modelAndView.addObject("msg", "Hello Nagnath, This is spring MVC using annotation based configurations!!!");
		
		return modelAndView;
	}
	
	// Handling single path param in method
	@RequestMapping("/hi/username/{username}")
	public ModelAndView hiWorld( @PathVariable("username") String userName) {
		
		// HelloPage is the view name, which is used to detect view 
		ModelAndView modelAndView = new ModelAndView("HelloPage");
		modelAndView.addObject("msg", "Hi "+ userName +" , This is spring MVC using annotation based configurations!!!");
		
		return modelAndView;
	}
	
	
	//Handling multiple path param in method
	@RequestMapping("/hi/country/{country}/username/{username}")
	public ModelAndView hiCountry( @PathVariable Map<String, String> pathArgs) {
		
		// HelloPage is the view name, which is used to detect view 
		ModelAndView modelAndView = new ModelAndView("HelloPage");
		modelAndView.addObject("msg", "Hi "+ pathArgs.get("username") +" , You are from " + pathArgs.get("country"));
		
		return modelAndView;
	}
}
/*
public class HelloWorldController extends AbstractController {

	@Override
	protected ModelAndView handleRequestInternal(HttpServletRequest arg0, HttpServletResponse arg1) throws Exception {
		
		ModelAndView modelAndView = new ModelAndView("HelloPage");
		modelAndView.addObject("welcomeMessage", "Hi Nagnath, Welcome to the first spring mvc Application!!!");
		
		return modelAndView;
	}

}
*/
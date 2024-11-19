package edu.icet.controller;

import edu.icet.dto.Blog;
import edu.icet.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blog")
@RequiredArgsConstructor
@CrossOrigin
public class BlogController {
    @Autowired
    final BlogService service;

    @GetMapping("/get-all")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public List<Blog> getAll(){
        return service.getAll();
    }

    @PostMapping("/add-order")
    @ResponseStatus(HttpStatus.CREATED)
    public void addBlog(@RequestBody Blog blog){
        service.addBlog(blog);
    }
}

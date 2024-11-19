package edu.icet.service;

import edu.icet.dto.Appointment;
import edu.icet.dto.Blog;

import java.util.List;

public interface BlogService {
    List<Blog> getAll();
    void addBlog(Blog blog);
}

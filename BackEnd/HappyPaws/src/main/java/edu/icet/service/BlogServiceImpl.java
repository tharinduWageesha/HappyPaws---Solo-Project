package edu.icet.service;

import edu.icet.dto.Blog;
import edu.icet.repository.BlogRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@RequiredArgsConstructor
@Service
public class BlogServiceImpl implements BlogService {
    private final BlogRepository repository;
    private final ModelMapper mapper;
    @Override
    public List<Blog> getAll() {
        ArrayList<Blog> blogArrayList = new ArrayList<>();
        repository.findAll().forEach(entity->{
            blogArrayList.add(mapper.map(entity,Blog.class));
        });
        return blogArrayList;
    }

    @Override
    public void addBlog(Blog blog) {

    }
}

package edu.icet.controller;

import edu.icet.dto.User;
import edu.icet.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@CrossOrigin
public class UserController {
    @Autowired
    final UserService service;

    @GetMapping("/get-all")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public List<User> getAll(){
        return service.getAll();
    }

    @PutMapping("/update-user")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateUser(User user){
        service.updateUser(user);
    }

    @PostMapping("/add-user")
    @ResponseStatus(HttpStatus.CREATED)
    public void addUser(@RequestBody User user){
        service.addUser(user);
    }

    @GetMapping("/search-by-name/{name}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public User getUserByName(@PathVariable String name){
        return service.getUserByName(name);
    }
}

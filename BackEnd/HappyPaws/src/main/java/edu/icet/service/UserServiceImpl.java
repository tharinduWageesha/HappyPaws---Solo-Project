package edu.icet.service;

import edu.icet.dto.Appointment;
import edu.icet.dto.User;
import edu.icet.entity.UserEntity;
import edu.icet.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{

    private final UserRepository repository;
    private final ModelMapper mapper;

    @Override
    public List<User> getAll() {
        ArrayList<User> userArrayList = new ArrayList<>();
        repository.findAll().forEach(entity->{
            userArrayList.add(mapper.map(entity,User.class));
        });
        return userArrayList;
    }

    @Override
    public void addUser(User user) {
        UserEntity map = mapper.map(user, UserEntity.class);
        repository.save(map);
    }

    @Override
    public void updateUser(User user) {
        repository.save(mapper.map(user,UserEntity.class));
    }

    @Override
    public User getUserByEmail(String email) {
        UserEntity userEntity = repository.findByEmail(email);
        if (userEntity == null) {
            return null; // Or handle it by throwing an exception
        }
        return mapper.map(userEntity, User.class);    }
}

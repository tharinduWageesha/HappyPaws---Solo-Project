package edu.icet.service;

import edu.icet.dto.Appointment;
import edu.icet.dto.Order;
import edu.icet.entity.OrderEntity;
import edu.icet.entity.UserEntity;
import edu.icet.repository.OrderRepository;
import edu.icet.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@RequiredArgsConstructor
@Service
public class OrderServiceImpl implements OrderService{
    private final OrderRepository repository;
    private final ModelMapper mapper;
    @Override
    public List<Order> getAll() {
        ArrayList<Order> orderArrayList = new ArrayList<>();
        repository.findAll().forEach(entity->{
            orderArrayList.add(mapper.map(entity,Order.class));
        });
        return orderArrayList;
    }

    @Override
    public void addOrder(Order order) {
        OrderEntity map = mapper.map(order, OrderEntity.class);
        repository.save(map);
    }
}

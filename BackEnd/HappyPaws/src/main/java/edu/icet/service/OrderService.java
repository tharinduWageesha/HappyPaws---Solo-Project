package edu.icet.service;

import edu.icet.dto.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAll();
    void addOrder(Order order);
}

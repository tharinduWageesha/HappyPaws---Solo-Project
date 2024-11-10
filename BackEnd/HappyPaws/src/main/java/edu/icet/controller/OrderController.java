package edu.icet.controller;

import edu.icet.dto.Order;
import edu.icet.dto.Product;
import edu.icet.service.OrderService;
import edu.icet.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
@CrossOrigin
public class OrderController {
    @Autowired
    final OrderService service;

    @GetMapping("/get-all")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public List<Order> getAll(){
        return service.getAll();
    }

    @PostMapping("/add-order")
    @ResponseStatus(HttpStatus.CREATED)
    public void addOrder(@RequestBody Order order){
        service.addOrder(order);
    }


}

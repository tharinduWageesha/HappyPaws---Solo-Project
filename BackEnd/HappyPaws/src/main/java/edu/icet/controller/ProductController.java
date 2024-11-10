package edu.icet.controller;

import edu.icet.dto.Product;
import edu.icet.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
@CrossOrigin
public class ProductController {
    @Autowired
    final ProductService service;

    @GetMapping("/get-all")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public List<Product> getAll(){
        return service.getAll();
    }

    @PostMapping("/add-product")
    @ResponseStatus(HttpStatus.CREATED)

    public void addProduct(@RequestBody Product product){
        service.addProduct(product);
    }
    @PostMapping("/update-product")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateProduct(@RequestBody Product product){
        service.updateProduct(product);
    }

    @GetMapping("/search-by-productName/{product_name}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Product getProductByName(@PathVariable String product_name){
        return service.getProductByName(product_name);
    }
}

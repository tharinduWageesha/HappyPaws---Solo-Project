package edu.icet.service;

import edu.icet.dto.Product;


import java.util.List;

public interface ProductService {
    List<Product> getAll();
    void addProduct(Product product);
    void updateProduct(Product product);
    Product getProductByName(String productName);

}

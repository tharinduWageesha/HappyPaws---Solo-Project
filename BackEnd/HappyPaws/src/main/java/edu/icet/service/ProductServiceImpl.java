package edu.icet.service;

import edu.icet.dto.Appointment;
import edu.icet.dto.Product;
import edu.icet.dto.User;
import edu.icet.entity.ProductEntity;
import edu.icet.entity.UserEntity;
import edu.icet.repository.ProductRepository;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ProductServiceImpl implements ProductService{
    private final ProductRepository repository;
    private final ModelMapper mapper;

    @Override
    public List<Product> getAll() {
        ArrayList<Product> productArrayList = new ArrayList<>();
        repository.findAll().forEach(entity->{
            productArrayList.add(mapper.map(entity,Product.class));
        });
        return productArrayList;
    }

    @Override
    public void addProduct(Product product) {
        ProductEntity map = mapper.map(product, ProductEntity.class);
        repository.save(map);
    }

    @Override
    public void updateProduct(Product product) {

    }

    @Override
    public Product getProductByName(String productName) {
        ProductEntity productEntity = repository.findByProductName(productName);
        if (productEntity == null) {
            return null;
        }
        return mapper.map(productEntity, Product.class);
    }
}

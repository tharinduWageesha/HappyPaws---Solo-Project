package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Product {
    private Integer productID;
    private String productName;
    private Double price;
    private Integer qty;
    private String product_picture;
    private String category;
}

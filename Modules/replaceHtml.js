module.exports= function(templetes, product){
    let output=templetes.replace('{{%NAME%}}',product.name);
    output=output.replace('{{%BRAND%}}',product.brand);
    output=output.replace('{{%PRICE%}}',product.price);
    output= output.replace('{{%CATEGORY%}}',product.category);
   
    return output;
}
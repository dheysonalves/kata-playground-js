# Returning Valid Prices

There has been a masterdata issue which affected the prices of the products. Check if each product has a valid price (integer or float, and greater than or equal to zero). Products with a price of 0 are free and count as a valid price.

The return value should be a Boolean.

## Examples

```javascript
hasValidPrice({ "product": "Milk", price: 1.50 }) ➞ true

hasValidPrice({ "product": "Cheese", price: -1 }) ➞ false

hasValidPrice({ "product": "Eggs", price: 0 }) ➞ true

hasValidPrice({ "product": "Cereals", price: "3.0" }) ➞ false

hasValidPrice() ➞ false
```

## Notes

Run the tests first to see the results before making changes and understand why eggs is returning 0 and flour is returning undefined.

## Why is eggs 0?

.denruter si 0 erofereht os ,ecirp.tcudorp ta eulav yslaf a si 0 .noitidnoc tsal eht ro noitidnoc yslaf tsal eht fo tluser eht si eulav denruter eht ,&& hguorht snoitidnoc gnigrem nehW (https://www.textreverse.com)

## Why is flour undefined?

.denruter si denifednu erofereht os ,denifednu si ecirp.tcudorp .noitidnoc tsal eht ro noitidnoc yslaf tsal eht fo tluser eht si eulav denruter eht ,&& hguorht snoitidnoc gnigrem nehw ,ereh emaS (https://www.textreverse.com)

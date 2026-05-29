import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento',
})
export class DescuentoPipe implements PipeTransform {
  transform(precio:number,porcentaje:number): number {
    if (precio == null || porcentaje == null) {
      return precio;
    }
    const descuento = precio * (porcentaje / 100)
    return precio - descuento
  }
}

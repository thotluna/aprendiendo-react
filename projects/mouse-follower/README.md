<div align="center">

<img alt="Proyecto Twitter follow card" src="./src/assets/twitter-follow-card.jpg" width="500" />

# Proyecto Mouse Follower 鈿涳笍

Curso para aprender **React** basado en proyectos.
**[Todos los mi茅rcoles a las 18PM 馃嚜馃嚫 en Twitch de midudev](https://twitch.tv/midudev)**
</div>

En esta ocasi贸n se hizo un efecto de un c铆rculo que sigue al mouse. Esto se realiz贸 al suscribir el evento pointermove de window que entrega en el evento las coordenadas x e y de la ubicaci贸n del puntero, y con la ayuda de un useEffect se guardaron en un estado de posici贸n, la cual se usa para darle la posici贸n a un div que hace de circunferencia del pointer.

Es importante colocar la propiedad CSS pointer-event: none en el div, para que as铆 se propague el evento del click al bot贸n de activar u desactivar el efecto, o a cualquier otro componente.
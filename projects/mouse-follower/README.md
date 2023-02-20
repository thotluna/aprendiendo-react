<div align="center">

<img alt="Proyecto Twitter follow card" src="./src/assets/twitter-follow-card.jpg" width="500" />

# Proyecto Mouse Follower ⚛️

Curso para aprender **React** basado en proyectos.
**[Todos los miércoles a las 18PM 🇪🇸 en Twitch de midudev](https://twitch.tv/midudev)**
</div>

En esta ocasión se hizo un efecto de un círculo que sigue al mouse. Esto se realizó al suscribir el evento pointermove de window que entrega en el evento las coordenadas x e y de la ubicación del puntero, y con la ayuda de un useEffect se guardaron en un estado de posición, la cual se usa para darle la posición a un div que hace de circunferencia del pointer.

Es importante colocar la propiedad CSS pointer-event: none en el div, para que así se propague el evento del click al botón de activar u desactivar el efecto, o a cualquier otro componente.
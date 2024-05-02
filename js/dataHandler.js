// Para cargar y procesar datos de edificios desde un JSON

/*
 * Carga y procesa los datos de edificios desde un archivo JSON.
 * @param {string} url - La URL del archivo JSON con los datos de los edificios.
*/

function loadBuildingData(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => initializeBuildings(data))
        .catch(error => console.error('Error while fetching building data:', error));
}
/*
 * Inicializa entidades de A-Frame para cada edificio en los datos.
 * @param {Array} buildingsData - Array de objetos con datos de los edificios.
*/

function initializeBuildings(buildingsData) {
    buildingsData.forEach(building => {
        const entity = createBuildingEntity(building);
        document.querySelector('a-scene').appendChild(entity);
    });
}

/*
 * Crea una entidad A-Frame para un edificio.
 * @param {Object} building - Objeto con datos de un edificio.
 * @return {Element} La entidad A-Frame creada.
 */

function createBuildingEntity(building) {
    const entity = document.createElement('a-entity');
    entity.setAttribute('gps-entity-place', `latitude: ${building.Latitud}; longitude: ${building.Longitud}`);
    entity.setAttribute('geometry', { primitive: 'box', height: 1, width: 1 });
    entity.setAttribute('material', 'color: red');
    return entity;
}

// Llamar a la función loadBuildingData con la ruta correcta al archivo JSON

loadBuildingData('../data/buildings.json');

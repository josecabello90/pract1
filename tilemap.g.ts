// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010202020202020102020202020202010102020202020201010202020202020101020202020202020102020202020201010101010102020201020201010101010102020201020202010202010202020101020202010202010102020202020201010202010102020102020202020202010102020202020201020202020202020101020202020202010101010202020201010202020202020202020202020202010102020201020202020202020202020101020202010202020202010102020201010202010102020202020201020202010102020101020202020202010202020101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . 2 2 . . . . . . 2 
2 . . . . . . . 2 . . . . . . 2 
2 2 2 2 2 . . . 2 . . 2 2 2 2 2 
2 . . . 2 . . . 2 . . 2 . . . 2 
2 . . . 2 . . 2 2 . . . . . . 2 
2 . . 2 2 . . 2 . . . . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . 2 2 2 2 . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 . . . . . . . . . . 2 
2 . . . 2 . . . . . 2 2 . . . 2 
2 . . 2 2 . . . . . . 2 . . . 2 
2 . . 2 2 . . . . . . 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.skillmap.islandTile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.

var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('tabl')) {
    var createTable = registerSVG('tabl', 'images/cassandra/internals/partitions/create-table.png', 400, 190, 100, 100);
    var insertOne = registerSVG('tabl', 'images/cassandra/internals/partitions/insert-one.png', 645, 70, 0, 130);
    var insertMany = registerSVG('tabl', 'images/cassandra/internals/partitions/insert-many.png', 650, 280, 0, 60);
    var tableEmpty = registerSVG('tabl', 'images/cassandra/internals/partitions/table-empty.png', 400, 45, 650, 0);
    var tableOne = registerSVG('tabl', 'images/cassandra/internals/partitions/table-one-row.png', 400, 88, 650, 0);
    var tableFull = registerSVG('tabl', 'images/cassandra/internals/partitions/table-full.png', 400, 415, 650, 0);
    createTable.image.opacity(0);
    insertOne.image.opacity(0);
    insertMany.image.opacity(0);
    tableEmpty.image.opacity(0);
    tableOne.image.opacity(0);
    tableFull.image.opacity(0);
    addAnimation('tabl', function() {
      createTable.image.animate(animationSpeed).opacity(1).after(function(){
        tableEmpty.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('tabl', function() {
      createTable.image.animate(animationSpeed).opacity(0).after(function(){
        insertOne.image.animate(animationSpeed).opacity(1).after(function() {
          tableOne.image.animate(animationSpeed).opacity(1);
        });
      });
    });
    addAnimation('tabl', function() {
      insertOne.image.animate(animationSpeed).opacity(0).after(function() {
          insertMany.image.animate(animationSpeed).opacity(1).after(function() {
            tableFull.image.animate(animationSpeed).opacity(1);
          });
      });
    });
    addAnimation('tabl', function() {
      tableEmpty.image.opacity(0);
      tableOne.image.opacity(0);
      insertMany.image.animate(animationSpeed).opacity(0).after(function(){
        tableFull.image.animate(animationSpeed).move(425, 0);
      });
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('parts')) {
    var cluster = registerSVG('parts', 'images/cassandra/internals/partitions/cluster.svg', 497, 493, 600, -20);
    var backgroundTexas = registerSVG('parts', 'images/cassandra/internals/partitions/background-texas.svg', 420, 189, 395, 0);
    var backgroundNewYork = registerSVG('parts', 'images/cassandra/internals/partitions/background-new-york.svg', 425, 145, 395, 195);
    var backgroundCalifornia = registerSVG('parts', 'images/cassandra/internals/partitions/background-california.svg', 435, 155, 390, 320);
    var rowHead = registerSVG('parts', 'images/cassandra/internals/partitions/row-0-header.png', 390, 41, 410, 0);
    var row1Tx1 = registerSVG('parts', 'images/cassandra/internals/partitions/row-1-tx-1.png', 390, 41, 410, 41);
    var row2Ca1 = registerSVG('parts', 'images/cassandra/internals/partitions/row-2-ca-1.png', 390, 41, 410, 82);
    var row3Ny1 = registerSVG('parts', 'images/cassandra/internals/partitions/row-3-ny-1.png', 390, 41, 410, 123);
    var row4Tx2 = registerSVG('parts', 'images/cassandra/internals/partitions/row-4-tx-2.png', 390, 41, 410, 164);
    var row5Tx3 = registerSVG('parts', 'images/cassandra/internals/partitions/row-5-tx-3.png', 390, 41, 410, 205);
    var row6Ny2 = registerSVG('parts', 'images/cassandra/internals/partitions/row-6-ny-2.png', 390, 41, 410, 246);
    var row7Ca2 = registerSVG('parts', 'images/cassandra/internals/partitions/row-7-ca-2.png', 390, 41, 410, 287);
    var row8Tx4 = registerSVG('parts', 'images/cassandra/internals/partitions/row-8-tx-4.png', 390, 41, 410, 328);
    var row9Ny3 = registerSVG('parts', 'images/cassandra/internals/partitions/row-9-ny-3.png', 390, 41, 410, 369);
    var keyTx = registerSVG('parts', 'images/cassandra/internals/partitions/key-tx.svg', 70, 70, 300, 60);
    var keyNy = registerSVG('parts', 'images/cassandra/internals/partitions/key-ny.svg', 70, 70, 300, 235);
    var keyCa = registerSVG('parts', 'images/cassandra/internals/partitions/key-ca.svg', 70, 70, 300, 365);
    var arrow1 = registerSVG('parts', 'images/cassandra/internals/partitions/arrow2.svg', 150, 25, 385, 80);
    var arrow2 = registerSVG('parts', 'images/cassandra/internals/partitions/arrow2.svg', 150, 25, 385, 255);
    var arrow3 = registerSVG('parts', 'images/cassandra/internals/partitions/arrow2.svg', 150, 25, 385, 385);

    var pkState = registerSVG('parts', 'images/cassandra/internals/partitions/primary-key-state.svg', 260, 29, 70, 155);
    var pkStateId = registerSVG('parts', 'images/cassandra/internals/partitions/primary-key-state-id.svg', 294, 29, 80, 155);

    pkState.image.opacity(0);
    pkStateId.image.opacity(0);

    var token1 = registerSVG('parts', 'images/cassandra/internals/partitions/token-24.svg', 70, 70, 110, 160);
    var token2 = registerSVG('parts', 'images/cassandra/internals/partitions/token-58.svg', 70, 70, 110, 160);
    var token3 = registerSVG('parts', 'images/cassandra/internals/partitions/token-83.svg', 70, 70, 110, 160);
    var partitioner = registerSVG('parts', 'images/cassandra/internals/partitions/partitioner.svg', 190, 100, 80, 150);
    var tokens = [token1, token2, token3];
    partitioner.image.opacity(0);
    tokens.forEach(function(t){ t.image.opacity(0); });

    var backgrounds = [backgroundTexas, backgroundNewYork, backgroundCalifornia];
    var rows = [row1Tx1, row2Ca1, row3Ny1,
               row4Tx2, row5Tx3, row6Ny2,
               row7Ca2, row8Tx4, row9Ny3];
    var allItems = rows.concat(backgrounds);
    var keys = [keyTx, keyNy, keyCa, arrow1, arrow2, arrow3];
    backgrounds.forEach(function(b){ b.image.opacity(0); });
    keys.forEach(function(k) { k.image.opacity(0); });
    cluster.image.opacity(0);

    addAnimation('parts', function() {
      var speed = animationSpeed * 3;
      rowHead.image.animate(speed).opacity(0);

      row1Tx1.image.animate(speed).move(410, 15);
      row4Tx2.image.animate(speed).move(410, 55);
      row5Tx3.image.animate(speed).move(410, 95);
      row8Tx4.image.animate(speed).move(410, 135);

      row3Ny1.image.animate(speed).move(410, 206);
      row6Ny2.image.animate(speed).move(410, 246);
      row9Ny3.image.animate(speed).move(410, 286);

      row2Ca1.image.animate(speed).move(410, 357);
      row7Ca2.image.animate(speed).move(410, 397).after(function() {
        backgrounds.forEach(function(b){
          b.image.animate(animationSpeed).opacity(1);
        });
      });
    });

    addAnimation('parts', function() {
      allItems.forEach(function(i){
        i.image.animate(animationSpeed).translate(150, 0);
      });
      keys.forEach(function(k) {
        k.image.animate(animationSpeed, '<>', animationSpeed).opacity(1);
      });
    });

    addAnimation('parts', function() {
      partitioner.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('parts', function() {
      tokens.forEach(function(t){ t.image.opacity(1); });

      // Don't hate!
      keyTx.image.animate(300, '-').move(0, 60).after(function(){
        keyTx.image.animate(150, '-').move(0, 165).after(function() {
          keyTx.image.animate(150, '-').move(110, 160).after(function(){
            token1.image.animate(150, '-').move(300, 160).after(function(){
              token1.image.animate(150, '-').move(300, 60).after(function() {

                keyNy.image.animate(300, '-').move(0, 235).after(function(){
                  keyNy.image.animate(150, '-').move(0, 165).after(function() {
                    keyNy.image.animate(150, '-').move(110, 160).after(function(){
                      token2.image.animate(150, '-').move(300, 160).after(function(){
                        token2.image.animate(150, '-').move(300, 235).after(function() {

                          keyCa.image.animate(300, '-').move(0, 365).after(function(){
                            keyCa.image.animate(150, '-').move(0, 165).after(function() {
                              keyCa.image.animate(150, '-').move(110, 160).after(function(){
                                token3.image.animate(150, '-').move(300, 160).after(function(){
                                  token3.image.animate(150, '-').move(300, 365).after(function() {});
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });

    addAnimation('parts', function() {
      keyTx.image.opacity(0);
      keyCa.image.opacity(0);
      keyNy.image.opacity(0);
      partitioner.image.animate(animationSpeed).opacity(0).after(function() {
        pkState.image.animate(animationSpeed).opacity(1);
      });
    });

    addAnimation('parts', function() {
      pkState.image.animate(animationSpeed).opacity(0).after(function(){
        pkStateId.image.animate(animationSpeed).opacity(1);
      });
    });


    addAnimation('parts', function() {
      token1.image.animate(animationSpeed).opacity(0);
      token2.image.animate(animationSpeed).opacity(0);
      token3.image.animate(animationSpeed).opacity(0);
      partitioner.image.animate(animationSpeed).opacity(0);
      arrow1.image.animate(animationSpeed).opacity(0);
      arrow2.image.animate(animationSpeed).opacity(0);
      arrow3.image.animate(animationSpeed).opacity(0);
      pkStateId.image.animate(animationSpeed).opacity(0).after(function() {
        rows.forEach(function(row) { row.image.animate(animationSpeed).move(-125, row.image.y()); });
        backgrounds.forEach(function(b) { b.image.animate(animationSpeed).move(-140, b.image.y()) ; });
        cluster.image.animate(animationSpeed).opacity(1);
      });
    });

    addAnimation('parts', function() {
      rows.forEach(function(r) { r.image.animate(animationSpeed / 2).opacity(0); });
      backgroundTexas.image.animate().move(620, 75).during(function(theta){
        var decrease = (189 - 25) * (1 - theta);
        backgroundTexas.image.height(25 + decrease);
      });
      backgroundNewYork.image.animate().move(482, 155).during(function(theta){
        var decrease = (425 - 50) * (1 - theta);
        backgroundNewYork.image.width(50 + decrease);
      });
      backgroundCalifornia.image.animate().move(665, 336).during(function(theta){
        var decrease = (435 - 65) * (1 - theta);
        backgroundCalifornia.image.width(65 + decrease);
      });
    });
  }
});
var animationSpeed = 600;

Animation.animate(function () {
  if(registerCanvas('prt')) {
    // I know this is copy paste hell. In a hurry.
    var partition = registerSVG('prt', 'images/cassandra/internals/clustering-columns/partition.svg', 654, 411, 300, 0);
    var row1 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-1-houston.png', 423, 40, 500, 30);
    var row2 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-2-dallas.png', 423, 40, 500, 69);
    var row3 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-3-snyder.png', 423, 40, 500, 108);
    var row4 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-4-austin.png', 423, 40, 500, 147);
    var row5 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-5-dallas.png', 423, 40, 500, 186);
    var row6 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-6-el-paso.png', 423, 40, 500, 225);
    var row7 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-7-austin.png', 423, 40, 500, 264);
    var row8 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-8-san-antonio.png', 423, 40, 500, 303);
    var row9 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-9-houston.png', 423, 40, 500, 342);

    var row1City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-1-houston-city.png', 423, 40, 500, 225);
    var row2City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-2-dallas-city.png', 423, 40, 500, 108);
    var row3City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-3-snyder-city.png', 423, 40, 500, 342);
    var row4City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-4-austin-city.png', 423, 40, 500, 30);
    var row5City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-5-dallas-city.png', 423, 40, 500, 147);
    var row6City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-6-el-paso-city.png', 423, 40, 500, 186);
    var row7City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-7-austin-city.png', 423, 40, 500, 69);
    var row8City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-8-san-antonio-city.png', 423, 40, 500, 303);
    var row9City = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-9-houston-city.png', 423, 40, 500, 264);

    var row1Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-1-houston-name.png', 423, 40, 500, 186);
    var row2Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-2-dallas-name.png', 423, 40, 500, 69);
    var row3Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-3-snyder-name.png', 423, 40, 500, 264);
    var row4Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-4-austin-name.png', 423, 40, 500, 225);
    var row5Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-5-dallas-name.png', 423, 40, 500, 30);
    var row6Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-6-el-paso-name.png', 423, 40, 500, 303);
    var row7Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-7-austin-name.png', 423, 40, 500, 147);
    var row8Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-8-san-antonio-name.png', 423, 40, 500, 342);
    var row9Name = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-9-houston-name.png', 423, 40, 500, 108);

    var row1StateName = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-1-houston-city-name.png', 423, 40, 500, 264);
    var row2StateName = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-2-dallas-city-name.png', 423, 40, 500, 147);
    var row4StateName = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-4-austin-city-name.png', 423, 40, 500, 69);
    var row5StateName = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-5-dallas-city-name.png', 423, 40, 500, 108);
    var row7StateName = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-7-austin-city-name.png', 423, 40, 500, 30);
    var row9StateName = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-9-houston-city-name.png', 423, 40, 500, 225);

    var row1Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-1-houston-id.png', 423, 40, 500, 264);
    var row2Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-2-dallas-id.png', 423, 40, 500, 147);
    var row3Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-3-snyder-id.png', 423, 40, 500, 342);
    var row4Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-4-austin-id.png', 423, 40, 500, 69);
    var row5Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-5-dallas-id.png', 423, 40, 500, 108);
    var row6Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-6-el-paso-id.png', 423, 40, 500, 186);
    var row7Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-7-austin-id.png', 423, 40, 500, 30);
    var row8Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-8-san-antonio-id.png', 423, 40, 500, 303);
    var row9Id = registerSVG('prt', 'images/cassandra/internals/clustering-columns/row-9-houston-id.png', 423, 40, 500, 225);

    var rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
    var rowCities = [row1City, row2City, row3City, row4City, row5City, row6City, row7City, row8City, row9City];
    var rowNames = [row1Name, row2Name, row3Name, row4Name, row5Name, row6Name, row7Name, row8Name, row9Name];
    var rowStateNames = [ row1StateName, row2StateName, row4StateName, row5StateName, row7StateName, row9StateName];
    var rowIds = [row1Id, row2Id, row3Id, row4Id, row5Id, row6Id, row7Id, row8Id, row9Id];
    rowCities.forEach(function(city){ city.image.opacity(0); });
    rowNames.forEach(function(name) { name.image.opacity(0); });
    rowStateNames.forEach(function(name) { name.image.opacity(0); });
    rowIds.forEach(function(row) { row.image.opacity(0); });

    var pk1 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/primary-key-city.svg', 314, 29, 20, 80);
    var pk2 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/primary-key-name.svg', 337, 29, 20, 80);
    var pk3 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/primary-key-city-name.svg', 390, 29, 20, 80);
    var pk4 = registerSVG('prt', 'images/cassandra/internals/clustering-columns/primary-key-city-name-id.svg', 425, 29, 20, 80);

    pk1.image.opacity(0);
    pk2.image.opacity(0);
    pk3.image.opacity(0);
    pk4.image.opacity(0);

    addAnimation('prt', function() {
      pk1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('prt', function() {
      // Order by city
      row1.image.animate(animationSpeed).move(500, 225);
      row2.image.animate(animationSpeed).move(500, 108);
      row3.image.animate(animationSpeed).move(500, 342);
      row4.image.animate(animationSpeed).move(500, 30);
      row5.image.animate(animationSpeed).move(500, 147);
      row6.image.animate(animationSpeed).move(500, 186);
      row7.image.animate(animationSpeed).move(500, 69);
      row9.image.animate(animationSpeed).move(500, 264).after(function() {
        rowCities.forEach(function(city) { city.image.animate(animationSpeed).opacity(1); });
      });
    });
    addAnimation('prt', function() {
      pk1.image.animate(animationSpeed).opacity(0).after(function() {
        pk2.image.animate(animationSpeed).opacity(1).after(function() {
          rows.forEach(function(city) { city.image.opacity(0); });
        });
      });
    });
    addAnimation('prt', function() {
      row1City.image.animate(animationSpeed).move(500, 186);
      row2City.image.animate(animationSpeed).move(500, 69);
      row3City.image.animate(animationSpeed).move(500, 264);
      row4City.image.animate(animationSpeed).move(500, 225);
      row5City.image.animate(animationSpeed).move(500, 30);
      row6City.image.animate(animationSpeed).move(500, 303);
      row7City.image.animate(animationSpeed).move(500, 147);
      row8City.image.animate(animationSpeed).move(500, 342)
      row9City.image.animate(animationSpeed).move(500, 108).after(function() {
        rowNames.forEach(function(name) { name.image.animate(animationSpeed).opacity(1); });
      });
    });
    addAnimation('prt', function() {
      pk2.image.animate(animationSpeed).opacity(0).after(function() {
        pk3.image.animate(animationSpeed).opacity(1);
      });
    });

    addAnimation('prt', function() {
      rowCities.forEach(function(row) { row.image.opacity(0); });

      row1City.image.move(500, 225);
      row2City.image.move(500, 108);
      row3City.image.move(500, 342);
      row4City.image.move(500, 30);
      row5City.image.move(500, 147);
      row6City.image.move(500, 186);
      row7City.image.move(500, 69);
      row8City.image.move(500, 303);
      row9City.image.move(500, 264);

      row1Name.image.animate(animationSpeed).move(500, 264);
      row2Name.image.animate(animationSpeed).move(500, 108);
      row3Name.image.animate(animationSpeed).move(500, 342);
      row4Name.image.animate(animationSpeed).move(500, 30);
      row5Name.image.animate(animationSpeed).move(500, 147);
      row6Name.image.animate(animationSpeed).move(500, 186);
      row7Name.image.animate(animationSpeed).move(500, 69);
      row8Name.image.animate(animationSpeed).move(500, 303)
      row9Name.image.animate(animationSpeed).move(500, 225).after(function() {
        rowCities.forEach(function(row) { row.image.animate(animationSpeed).opacity(1); });
        rowNames.forEach(function(row) { row.image.animate(animationSpeed, '<>', animationSpeed).opacity(0); });
      });
    });
    addAnimation('prt', function() {
      row4City.image.animate(animationSpeed).move(500, 69);
      row7City.image.animate(animationSpeed).move(500, 30);

      row1City.image.animate(animationSpeed).move(500, 264);
      row9City.image.animate(animationSpeed).move(500, 225);

      row2City.image.animate(animationSpeed).move(500, 147);
      row5City.image.animate(animationSpeed).move(500, 108).after(function(){
        rowStateNames.forEach(function(name) { name.image.animate(animationSpeed).opacity(1); });
      });
    });
    addAnimation('prt', function() {
      pk3.image.animate(animationSpeed).opacity(0).after(function() {
        pk4.image.animate(animationSpeed).opacity(1).after(function() {
          rowIds.forEach(function(row) { row.image.animate(animationSpeed).opacity(1); });
        });
      });
    });
  }
});
var animationSpeed = 350;

Animation.animate(function () {
  if(registerCanvas('ndrynde')) {

    var smiley = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/node-single.svg', 300, 300, 450, 150);
    var cassandraBackdrop = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/cassandra-backdrop.svg', 350, 300, 50, 0);
    var cassandra = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/cassandra.svg', 280, 280, 85, 35);
    var cloud = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/cloud.svg', 350, 250, 800, 0);
    var jbod = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/harddrive.svg', 350, 200, 800, 350);
    var serverRoom = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/server-room.svg', 350, 200, 50, 350);
    cassandraBackdrop.image.opacity(0);
    serverRoom.image.opacity(0);
    cloud.image.opacity(0);
    jbod.image.opacity(0);
    cassandra.image.opacity(0);
    addAnimation('ndrynde', function() {
      cassandraBackdrop.image.animate(animationSpeed).opacity(1);
      cassandra.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ndrynde', function() {
      cloud.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ndrynde', function() {
      serverRoom.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ndrynde', function() {
      jbod.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ndrynde', function() {
      cassandraBackdrop.image.animate(animationSpeed).opacity(0);
      cassandra.image.animate(animationSpeed).opacity(0);
      cloud.image.animate(animationSpeed).opacity(0);
      jbod.image.animate(animationSpeed).opacity(0);
      serverRoom.image.animate(animationSpeed).opacity(0);
    });


    var data55 = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/data-55.png', 200, 200, -200, -200);
    var arrow = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/arrow.png', 200, 200, 280, 125);
    arrow.image.opacity(0);
    addAnimation('ndrynde', function() {
      data55.image.animate(animationSpeed).move(80, 50).after(function(){
        arrow.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('ndrynde', function() {
      data55.image.animate(animationSpeed).move(500, 200).opacity(0);
      arrow.image.animate(animationSpeed).opacity(0);
    });


    var request22 = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/request-22.png', 200, 150, 450, 0);
    var receive22 = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/receive-22.png', 200, 150, 500, 0);
    var data22 = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/data-22.png', 200, 200, 500, 200);
    request22.image.opacity(0);
    receive22.image.opacity(0);
    data22.image.opacity(0);
    addAnimation('ndrynde', function(){
      request22.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ndrynde', function(){
      data22.image.animate(animationSpeed).opacity(1);
      receive22.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ndrynde', function(){
      request22.image.animate(animationSpeed).opacity(0);
      data22.image.animate(750, '<>').move(500, -500);
      receive22.image.animate(animationSpeed, '<>', 500).opacity(0);
    });

    var transactions = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/transactions.svg', 500, 250, 350, -25);
    var terabytes = registerSVG('ndrynde', 'images/cassandra/internals/node-architecture/node/terabytes.svg', 500, 200, 350, 400);
    transactions.image.opacity(0);
    terabytes.image.opacity(0);
    addAnimation('ndrynde', function(){
      transactions.image.animate(animationSpeed).opacity(1);
      terabytes.image.animate(animationSpeed).opacity(1);
    });
  }
});
var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('overloadednode')) {
    var requests = registerSVG('overloadednode', 'images/cassandra/internals/node-architecture/ring/requests.png', 600, 600, 275, 0);
    var smiley = registerSVG('overloadednode', 'images/cassandra/internals/node-architecture/ring/node-single.svg', 300, 300, 450, 150);
    var requestsExtreme = registerSVG('overloadednode', 'images/cassandra/internals/node-architecture/ring/requests-extreme.png', 600, 600, 280, 0);
    var freakOut = registerSVG('overloadednode', 'images/cassandra/internals/node-architecture/ring/node-cracked.svg', 300, 300, 450, 150);
    requests.image.opacity(0);
    requestsExtreme.image.opacity(0);
    freakOut.image.opacity(0);
    addAnimation('overloadednode', function() {
      requests.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('overloadednode', function() {
      requests.image.animate(animationSpeed).opacity(0);
      requestsExtreme.image.animate(animationSpeed).opacity(1).after(function(){
        smiley.image.animate(animationSpeed).opacity(0);
        freakOut.image.animate(animationSpeed).opacity(1);
      });
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('thering')) {
    var theRing = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/ring.svg', 600, 600, 275, 0);
    var coloredRing = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/colored-ring.svg', 500, 500, 320, 0);
    var theRingBlank = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/ring-blank.svg', 500, 500, 320, 70);
    var theRingPro = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/ring-pro.svg', 500, 500, 320, 0);
    var questionMark = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/question-mark.svg', 175, 175, 490, 150);
    var arrow1 = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/arrow1.svg', 18, 183, 425, 160);
    var arrow2 = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/arrow2.svg', 80, 250, 300, -50);
    var data55 = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/partition-59.svg', 106, 36, -200, -200);
    var data55Purple = registerSVG('thering', 'images/cassandra/internals/node-architecture/ring/partition-59-purple.svg', 106, 36, 370, 85);
    theRingBlank.image.opacity(0);
    theRingPro.image.opacity(0);
    questionMark.image.opacity(0);
    arrow1.image.opacity(0);
    arrow2.image.opacity(0);
    coloredRing.image.opacity(0);
    data55Purple.image.opacity(0);

    addAnimation('thering', function() {
      theRing.image.animate(animationSpeed).opacity(0);
      theRingBlank.image.animate(animationSpeed).opacity(1).after(function(){
        theRingBlank.image.animate(animationSpeed).translate(0, -70);
      });
    });
    addAnimation('thering', function() {
      data55.image.animate(animationSpeed).move(160, 10).after(function(){
        questionMark.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('thering', function() {
      arrow2.image.animate(animationSpeed).opacity(1).after(function(){
        data55.image.animate(animationSpeed).move(370, 85).after(function() {
          arrow2.image.animate(animationSpeed).opacity(0);
        });
      });
    });
    addAnimation('thering', function() {
      theRingBlank.image.animate(animationSpeed).opacity(0);
      theRingPro.image.animate(animationSpeed).opacity(1);
      coloredRing.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('thering', function() {
      data55Purple.image.animate(animationSpeed).opacity(1).after(function() { data55.image.opacity(0); });
    });
    addAnimation('thering', function() {
      arrow1.image.animate(animationSpeed).opacity(1).after(function(){
        questionMark.image.animate(animationSpeed).opacity(0).after(function(){
          data55Purple.image.animate(animationSpeed).move(370, 380).after(function(){
            arrow1.image.animate(animationSpeed).opacity(0);
            data55Purple.image.animate(animationSpeed).opacity(0);
          });
        });
      });
    });
  }
});

Animation.animate(function() {
  if(registerCanvas('fullrng')) {
    var theRingBlank = registerSVG('fullrng', 'images/cassandra/internals/node-architecture/ring/ring-blank.svg', 500, 500, 320, 00);
    var fullRing = registerSVG('fullrng', 'images/cassandra/internals/node-architecture/ring/full-ring.svg', 570, 570, 287, 00);
    fullRing.image.opacity(0);
    addAnimation('fullrng', function(){
      theRingBlank.image.animate(animationSpeed).translate(0, 70).after(function(){
        theRingBlank.image.animate(animationSpeed).opacity(0);
        fullRing.image.animate(animationSpeed).opacity(1);
      });
    });
  }
});

var center = { x : 566, y : 316 };

allowInconsistency = true;

function getTarget()
{
  var radius = 209;
  var pi = 3.1415927;
  var radialRange = pi / 2 - pi / 6;
  var radialBaseOffset = pi / 14;
  var block = Math.floor(Math.random() * 4);

  var beInconsistent = Math.random() < .75 && allowInconsistency;
  if(beInconsistent)
  {
    block = Math.random() < .5 ? 0 : 2;
    radialBaseOffset = pi / 4;
    radialRange = pi / 12;
  }
  var blockBase = block * pi / 2;
  var theta = blockBase + radialBaseOffset + Math.random() * radialRange;

  return {
    block : block,
    x: center.x + radius * Math.cos(theta),
    y: center.y + radius * Math.sin(theta)
  };
}

Animation.animate(function () {
  if(registerCanvas('csthsh')) {
    var ring = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/ring-blank-no-nodes.svg', 500, 500, 320, 70);
    var ringNumberRange = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/ring-number-range.svg', 570, 570, 287, 00);

    var node0Green = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-green.svg', 83, 83, 528, 74);
    var node0Yellow = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-yellow.svg', 83, 83, 528, 74);
    var node0Red = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-red.svg', 83, 83, 528, 74);
    var node1Green = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-green.svg', 83, 83, 730, 276);
    var node1Yellow = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-yellow.svg', 83, 83, 730, 276);
    var node1Red = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-red.svg', 83, 83, 730, 276);
    var node2Green = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-green.svg', 83, 83, 528, 478);
    var node2Yellow = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-yellow.svg', 83, 83, 528, 478);
    var node2Red = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-red.svg', 83, 83, 528, 478);
    var node3Green = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-green.svg', 83, 83, 328, 276);
    var node3Yellow = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-yellow.svg', 83, 83, 328, 276);
    var node3Red = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/node-red.svg', 83, 83, 328, 276);
    var groups = [ { yellow : node0Yellow, red : node0Red },
                   { yellow : node1Yellow, red : node1Red },
                   { yellow : node2Yellow, red : node2Red },
                   { yellow : node3Yellow, red : node3Red }];
    groups.forEach(function(i) { i.yellow.image.opacity(0); i.red.image.opacity(0); });

    numDatams = 150;
    datums = [];

    for(i = 0; i < numDatams; i++)
    {
      var datum = {
        pic : registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/datam.svg', 7, 7, center.x, center.y),
        target : getTarget()
      };
      datums.push(datum)
    }
    var partitioner = registerSVG('csthsh', 'images/cassandra/internals/node-architecture/ring/partitioner.svg', 153, 56, 490, 290);

    var numDatumsPerBlock = [ 0, 0, 0, 0 ];

    var changeNodeColorIfNecessary = function() {
      var yellowThreshold = numDatams * (1/4);
      var redThreshold = numDatams * (1/3);

      for(j = 0; j < numDatumsPerBlock.length && allowInconsistency; j++)
      {
        if(numDatumsPerBlock[j] > redThreshold)
        {
          groups[j].red.image.opacity(1);
        }
        else if(numDatumsPerBlock[j] > yellowThreshold)
        {
          groups[j].yellow.image.opacity(1);
        }
      }
    }

    var reset = function() {
      i = 0;
      groups.forEach(function(g) { g.yellow.image.opacity(0); g.red.image.opacity(0); });
      datums.forEach(function(d) { d.pic.image.x(center.x); d.pic.image.y(center.y); });
      for(j = 0; j < numDatumsPerBlock.length; j++)
        numDatumsPerBlock[j] = 0;
    };

    i = 0;
    var moveIt = function() {
        if(i == datums.length)
          return;
        var datum = datums[i++];
        numDatumsPerBlock[datum.target.block]++;
        changeNodeColorIfNecessary();
        datum.pic.image.animate(50, '-').move(datum.target.x, datum.target.y).after(moveIt);
    }
    addAnimation('csthsh', function() {
      moveIt();
    });

    addAnimation('csthsh', function() {
      reset();
      allowInconsistency = false;
      for(j = 0; j < numDatams; j++)
        datums[j].target = getTarget();
      moveIt();
    });
  }
});

var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('mrslv')) {
    var client = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/client.svg', 136, 75, 550, 370);
    var server = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/server.svg', 136, 75, 550, 174);
    var router = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/router.svg', 136, 75, 550, 300);
    var arrow1 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/arrow1.svg', 10, 95, 615, 260);
    var arrow2 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/arrow2.svg', 10, 35, 615, 382);
    var arrow3 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/arrow3.svg', 168, 36, 450, 256);
    var masterSlaves2 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master-slaves.svg', 137, 249, 550, 0);
    var masterSlaves3 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master-slaves.svg', 137, 249, 550, 0);
    var masterSlaves4 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master-slaves.svg', 137, 249, 550, 0);
    var masterSlaves5 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master-slaves.svg', 137, 249, 550, 0);
    var masterSlaves1 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master-slaves.svg', 137, 249, 550, 0);
    var deadMaster = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/dead-master.svg', 136, 75, 351, 174);
    var deadSmiley = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/skull.svg', 100, 100, 370, 165);
    var hourGlass = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/hour-glass.svg', 200, 200, 220, 300);
    var newMaster = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/new-master.svg', 136, 162, 350, 0);

    var singleSlave = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/single-slave.svg', 136, 75, 150, 0);
    var twoSlaves = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/two-slaves.svg', 137, 162, 350, 0);
    var split1 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/new-master.svg', 136, 162, 150, 87);
    var master1 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master.svg', 136, 75, 350, 87);
    var master2 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master.svg', 136, 75, 150, 0);
    var master3 = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/master.svg', 136, 75, 350, 174);
    var splitBrain = registerSVG('mrslv', 'images/cassandra/internals/distributed-architecture/peer-to-peer/split-brain.svg', 320, 148, 160, 110);

    var all = [masterSlaves1, masterSlaves2, masterSlaves3, masterSlaves4, masterSlaves5];
    var all2 = [router, arrow2, arrow3, hourGlass, deadSmiley, deadMaster, newMaster];
    var all3 = [split1, master1, master2, master3, twoSlaves, singleSlave, splitBrain];
    all.forEach(function(i){ i.image.opacity(0); });
    all2.forEach(function(i){ i.image.opacity(0); });
    all3.forEach(function(i){ i.image.opacity(0); });
    addAnimation('mrslv', function() {
      masterSlaves1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('mrslv', function() {
      server.image.opacity(0);
      all.forEach(function(i){ i.image.opacity(1); });
      masterSlaves2.image.animate(animationSpeed).move(350, 0);
      masterSlaves3.image.animate(animationSpeed).move(150, 0);
      masterSlaves4.image.animate(animationSpeed).move(750, 0);
      masterSlaves5.image.animate(animationSpeed).move(950, 0);
    });
    addAnimation('mrslv', function() {
      arrow1.image.animate(animationSpeed).opacity(0);
      client.image.animate(animationSpeed).move(550, 426).after(function() {
        router.image.animate(animationSpeed).opacity(1);
        arrow2.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('mrslv', function() {
      arrow3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('mrslv', function() {
      deadSmiley.image.animate(animationSpeed).opacity(1).after(function() {
        deadMaster.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('mrslv', function() {
      hourGlass.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('mrslv', function() {
      hourGlass.image.animate(animationSpeed).opacity(0);
      newMaster.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('mrslv', function() {
      all2.forEach(function(i){ i.image.animate(animationSpeed).opacity(0); });
      client.image.animate(animationSpeed).opacity(0).after(function(){
        masterSlaves2.image.opacity(0);
        masterSlaves3.image.opacity(0);
        singleSlave.image.opacity(1);
        master3.image.opacity(1);
        split1.image.opacity(1);
        twoSlaves.image.opacity(1);
      });
    });
    addAnimation('mrslv', function() {
      master3.image.animate(animationSpeed).move(350, 280);
      split1.image.animate(animationSpeed).move(150, 193).after(function(){
        splitBrain.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('mrslv', function() {
      master1.image.animate(animationSpeed).opacity(1);
      master2.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('prtopr')) {
    var cluster = registerSVG('prtopr', 'images/cassandra/internals/distributed-architecture/peer-to-peer/cluster.svg', 416, 467, 400, 0);
    var data = registerSVG('prtopr', 'images/cassandra/internals/distributed-architecture/peer-to-peer/data.svg', 204, 422, 590, 22);
    var request1 = registerSVG('prtopr', 'images/cassandra/internals/distributed-architecture/peer-to-peer/request-1.svg', 423, 300, 310, 80);
    var request2 = registerSVG('prtopr', 'images/cassandra/internals/distributed-architecture/peer-to-peer/request-2.svg', 264, 290, 624, 80);
    var request3 = registerSVG('prtopr', 'images/cassandra/internals/distributed-architecture/peer-to-peer/request-3.svg', 277, 285, 310, 100);
    var request4 = registerSVG('prtopr', 'images/cassandra/internals/distributed-architecture/peer-to-peer/request-4.svg', 243, 197, 650, 80);
    var split = registerSVG('prtopr', 'images/cassandra/internals/distributed-architecture/peer-to-peer/split.svg', 342, 450, 440, 0);
    var all = [data, request1, request2, request3, request4, split];
    all.forEach(function(i){ i.image.opacity(0); });

    addAnimation('prtopr', function() {
      data.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('prtopr', function() {
      request1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('prtopr', function() {
      request1.image.animate(animationSpeed).opacity(0).after(function(){
        request2.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('prtopr', function() {
      request2.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('prtopr', function() {
      split.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('prtopr', function() {
      request3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('prtopr', function() {
      request4.image.animate(animationSpeed).opacity(1);
    });
  }
});
var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('drawing')) {
    var node1x = 547;
    var node1y = 60;
    var ring1 = registerSVG('drawing', 'images/cassandra/internals/distributed-architecture/vnodes/ring1.svg', 388, 388, 400, 70);
    var ring2 = registerSVG('drawing', 'images/cassandra/internals/distributed-architecture/vnodes/ring2.svg', 388, 388, 400, 70);
    var node1 = registerSVG('drawing', 'images/cassandra/internals/distributed-architecture/vnodes/node1.svg', 90, 90, node1x, node1y);
    var node2 = registerSVG('drawing', 'images/cassandra/internals/distributed-architecture/vnodes/node2.svg', 90, 90, 715, 225);
    var node3 = registerSVG('drawing', 'images/cassandra/internals/distributed-architecture/vnodes/node3.svg', 90, 90, 550, 385);
    var node4 = registerSVG('drawing', 'images/cassandra/internals/distributed-architecture/vnodes/node4.svg', 90, 90, -100, 225);

    var datums = [];
    var halves = [];
    var blueDatums = [];

    function fillNode(nodex, nodey, datumFileName, addToHalves)
    {
      var pi = 3.1415927;
      var twoPi = 2 * pi;
      for(numCircles = 1; numCircles <= 6; numCircles++)
      {
        var numDatumsThisCircle = numCircles * 6;
        var radius = numCircles * 6;
        for(i = 0; i < numDatumsThisCircle; i++)
        {
          alternate = ! addToHalves;
          if(alternate)
            i += 1;
          var theta = i * (twoPi / numDatumsThisCircle)
          var datum = registerSVG('drawing', datumFileName, 8, 8, nodex + 41 + radius * Math.cos(theta), nodey + 40 + radius * Math.sin(theta));
          datum.image.opacity(0);
          datums.push(datum);
          if(addToHalves && (numCircles + i) % 2 == 0)
            halves.push(datum);
        }
      }
    }
    fillNode(node1x, node1y, 'images/cassandra/internals/distributed-architecture/vnodes/datum-yellow.svg', true);
    fillNode(715, 225, 'images/cassandra/internals/distributed-architecture/vnodes/datum-blue.svg', false); // node2
    fillNode(550, 385, 'images/cassandra/internals/distributed-architecture/vnodes/datum-bright-green.svg', false); // node3
    var all = [ring2];
    all.forEach(function(i){ i.image.opacity(0); });
    addAnimation('drawing', function() {
      datums.forEach(function(d){ d.image.animate(animationSpeed).opacity(1);});
    });
    addAnimation('drawing', function() {
      node4.image.animate(animationSpeed).move(300, 225);
    });
    addAnimation('drawing', function() {
      node4.image.animate(animationSpeed).move(390, 225);
    });
    addAnimation('drawing', function() {
      ring2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('drawing', function() {
      halves.forEach(function(datum) {
        var newDatum = registerSVG('drawing', 'images/cassandra/internals/distributed-architecture/vnodes/datum-green.svg', 8, 8, datum.image.x(), datum.image.y());
        newDatum.image.opacity(0);
        datum.image.animate(animationSpeed).opacity(0);
        newDatum.image.animate(animationSpeed).opacity(1);
        blueDatums.push(newDatum);
      });
    });
    addAnimation('drawing', function() {
      var n = 0;
      function moveDatam() {
          if(n == blueDatums.length)
            return;
          var d = blueDatums[n];
          n = n + 1;
          d.image.animate(50, '<>').move(d.image.x() - 158, d.image.y() + 166).after(moveDatam);
      }
      moveDatam();
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('vndes')) {
    var ring1 = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/ring1.svg', 388, 388, 400, 70);
    var ring2 = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/vnode-ring-1.svg', 388, 388, 400, 70);
    var ring3 = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/vnode-ring-2.svg', 388, 388, 400, 70);
    var node1 = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/node1.svg', 90, 90, 547, 60);
    var node2 = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/node2.svg', 90, 90, 715, 225);
    var node3 = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/node3.svg', 90, 90, 550, 385);
    var node4 = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/node4.svg', 90, 90, -100, 225);

    var threeNodes = [node1, node2, node3];

    ring2.image.opacity(0);
    ring3.image.opacity(0);

    var datums = [[],[],[]];
    var blueDatums = [[], [], []];

    function fillNode(nodex, nodey, datumFileName, offset, datumsSlice)
    {
      var pi = 3.1415927;
      var twoPi = 2 * pi;
      for(numCircles = 1; numCircles <= 6; numCircles++)
      {
        var numDatumsThisCircle = numCircles * 4;
        var radius = numCircles * 6;
        for(i = 0; i < numDatumsThisCircle; i++)
        {
          var theta = (offset + i) * (twoPi / numDatumsThisCircle)
          var datum = registerSVG('vndes', datumFileName, 8, 8, nodex + 41 + radius * Math.cos(theta), nodey + 40 + radius * Math.sin(theta));
          datum.image.opacity(0);
          datumsSlice.push(datum);
        }
      }
    }
    fillNode(547, 0, 'images/cassandra/internals/distributed-architecture/vnodes/datum-yellow.svg', 0, datums[0]);
    fillNode(770, 225, 'images/cassandra/internals/distributed-architecture/vnodes/datum-blue.svg', 1, datums[1]); // node2
    fillNode(550, 438, 'images/cassandra/internals/distributed-architecture/vnodes/datum-bright-green.svg', 2, datums[2]); // node3

    addAnimation('vndes', function() {
      node1.image.animate(animationSpeed).move(547, 0);
      node2.image.animate(animationSpeed).move(770, 225);
      node3.image.animate(animationSpeed).move(550, 438).after(function() {
        ring2.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('vndes', function() {
      datums.forEach(function(d) {
        d.forEach(function(i) {
          i.image.animate(animationSpeed).opacity(1);
        });
      });
    });
    addAnimation('vndes', function() {
      node4.image.animate(animationSpeed).move(330, 225);
    });
    addAnimation('vndes', function() {
      ring1.image.opacity(0);
      ring2.image.animate(animationSpeed).opacity(0).after(function(){
        ring3.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('vndes', function() {
      var j = 0;
      datums.forEach(function(datumArray) {
        var i = 0;
        newBlue = blueDatums[j++];
        datumArray.forEach(function(datum) {
          if(i++ % 4 != 0)
            return;
          var newDatum = registerSVG('vndes', 'images/cassandra/internals/distributed-architecture/vnodes/datum-green.svg', 8, 8, datum.image.x(), datum.image.y());
          datum.image.animate(animationSpeed).opacity(0);
          newDatum.image.opacity(0);
          newDatum.image.animate(animationSpeed).opacity(1);
          newBlue.push(newDatum);
        });
      });
    });
    addAnimation('vndes', function() {
      var j = 0;
      blueDatums.forEach(function(node) {
        var i = 0;
        var nodeGraphic = threeNodes[j++];
        var xDelta = node4.image.x() - nodeGraphic.image.x();
        var yDelta = node4.image.y() - nodeGraphic.image.y();
        function moveDatam() {
          if(node.length == 0)
            return;
          var d = node[i++];
          node.splice(0, 0);
          d.image.animate(100, '<>').move(d.image.x() + xDelta, d.image.y() + yDelta).after(moveDatam);
        };
        moveDatam();
      });
    });
  }
});
var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('gspr')) {
    var cluster = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/cluster.svg', 461, 462, 400, 20);
    var arrow1 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/arrow1.svg', 120, 53, 330, 45);
    var arrow2 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/arrow2.svg', 85, 232, 520, 160);
    var arrow3 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/arrow3.svg', 234, 279, 480, 120);
    var arrow4 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/arrow4.svg', 293, 299, 490, 110);
    var gossip1 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip1.png', 80, 80, 455, 75);
    var gossip2 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip2.png', 80, 80, 590, 22);
    var gossip3 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip3.png', 80, 80, 725, 76);
    var gossip4 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip4.png', 80, 80, 784, 212);
    var gossip5 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip5.png', 80, 80, 725, 347);
    var gossip6 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip6.png', 80, 80, 592, 400);
    var gossip7 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip7.png', 80, 80, 455, 347);
    var gossip8 = registerSVG('gspr', 'images/cassandra/internals/distributed-architecture/gossip/gossip8.png', 80, 80, 400, 212);
    var all = [arrow1, arrow2, arrow3, arrow4, gossip1, gossip2,
               gossip3, gossip4, gossip5, gossip6, gossip7, gossip8];
    all.forEach(function(i){ i.image.opacity(0); });
    addAnimation('gspr', function() {
      gossip1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('gspr', function() {
      arrow1.image.animate(animationSpeed).opacity(0).after(function(){
        arrow2.image.animate(animationSpeed).opacity(1).after(function(){
          gossip6.image.animate(animationSpeed).opacity(1);
        });
      });
    });
    addAnimation('gspr', function() {
      arrow2.image.animate(animationSpeed).opacity(0).after(function(){
        arrow3.image.animate(animationSpeed).opacity(1).after(function(){
          gossip3.image.animate(animationSpeed).opacity(1);
          gossip8.image.animate(animationSpeed).opacity(1);
        });
      });
    });
    addAnimation('gspr', function() {
      arrow3.image.animate(animationSpeed).opacity(0).after(function(){
        arrow4.image.animate(animationSpeed).opacity(1).after(function(){
          gossip2.image.animate(animationSpeed).opacity(1);
          gossip4.image.animate(animationSpeed).opacity(1);
          gossip5.image.animate(animationSpeed).opacity(1);
          gossip7.image.animate(animationSpeed).opacity(1);
        });
      });
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('whtgsp')) {
    var cluster = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/cluster.svg', 461, 462, 400, 20);
    var largeNode = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/large-node.svg', 74, 74, 404, 214);

    var endpointState = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state.svg', 251, 27, 485, 60);

    var heartbeatState = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/heartbeat-state.svg', 207, 16, 460, 120);
    var heartbeatState0 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/heartbeat-state-0.svg', 236, 45, 550, 120);
    var heartbeatState1 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/heartbeat-state-1.svg', 236, 66, 550, 120);

    var applicationState = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state.svg', 340, 20, 460, 210);
    var applicationState0 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state-0.svg', 239, 41, 485, 210);
    var applicationState1 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state-1.svg', 239, 66, 485, 210);
    var applicationState2 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state-2.svg', 239, 91, 485, 210);
    var applicationState3 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state-3.svg', 239, 116, 485, 210);
    var applicationState4 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state-4.svg', 239, 141, 485, 210);
    var applicationState5 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state-5.svg', 239, 166, 485, 210);
    var applicationState6 = registerSVG('whtgsp', 'images/cassandra/internals/distributed-architecture/gossip/application-state-6.svg', 239, 191, 485, 210);

   var all = [
     endpointState,

     heartbeatState,
     heartbeatState0,
     heartbeatState1,

    applicationState,
    applicationState0,
    applicationState1,
    applicationState2,
    applicationState3,
    applicationState4,
    applicationState5,
    applicationState6
   ];
   all.forEach(function(i){ i.image.opacity(0); });

    addAnimation('whtgsp', function() {
      cluster.image.animate().opacity(0);
      largeNode.image.animate().move(360, 0).during(function(theta){
        increase = 508 - 74;
        largeNode.image.height(74 + increase * theta);
        largeNode.image.width(74 + increase * theta);
      });
      addAnimation('whtgsp', function() {
        endpointState.image.animate(animationSpeed).opacity(1);
      });
      addAnimation('whtgsp', function() {
        heartbeatState.image.animate(animationSpeed).opacity(1);
      });
      addAnimation('whtgsp', function() {
        heartbeatState0.image.animate(animationSpeed).opacity(1);
      });
      addAnimation('whtgsp', function() {
        heartbeatState1.image.animate(animationSpeed).opacity(1).after(function(){
          heartbeatState0.image.opacity(0);
        });
      });
      addAnimation('whtgsp', function() {
        applicationState.image.animate(animationSpeed).opacity(1);
      });
      addAnimation('whtgsp', function() {
        applicationState0.image.animate(animationSpeed).opacity(1);
      });
      addAnimation('whtgsp', function() {
        applicationState1.image.animate(animationSpeed).opacity(1).after(function(){
          applicationState0.image.opacity(0);
        });
      });
      addAnimation('whtgsp', function() {
        applicationState2.image.animate(animationSpeed).opacity(1).after(function(){
          applicationState1.image.opacity(0);
        });
      });
      addAnimation('whtgsp', function() {
        applicationState3.image.animate(animationSpeed).opacity(1).after(function(){
          applicationState2.image.opacity(0);
        });
      });
      addAnimation('whtgsp', function() {
        applicationState4.image.animate(animationSpeed).opacity(1).after(function(){
          applicationState3.image.opacity(0);
        });
      });
      addAnimation('whtgsp', function() {
        applicationState5.image.animate(animationSpeed).opacity(1).after(function(){
          applicationState4.image.opacity(0);
        });
      });
      addAnimation('whtgsp', function() {
        applicationState6.image.animate(animationSpeed).opacity(1).after(function(){
          applicationState5.image.opacity(0);
        });
      });
    });
  }
});


Animation.animate(function () {
  if(registerCanvas('snc')) {
    var cluster = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/small-cluster.svg', 403, 462, 400, 20);
    var nodeA = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/node-a.svg', 83, 83, 365, 210);
    var nodeC = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/node-c.svg', 83, 83, 750, 210);
    var arrow1sc = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/arrow1-sc.svg', 278, 11, 460, 245);
    var largeNodeA = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/large-node.svg', 508, 508, 0, 0);
    var largeNodeB = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/large-node.svg', 508, 508, 680, 0);

    var endpointStateNode1_0 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-0.svg', 287, 396, 110, 55);
    var endpointStateNode1_1 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-1.svg', 287, 396, 110, 55);
    var endpointStateNode1_2 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-2.svg', 287, 396, 110, 55);
    var endpointStateNode1_3 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-3.svg', 287, 396, 110, 55);
    var endpointStateNode1_4 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-4.svg', 287, 396, 110, 55);
    var endpointStateNode1_5 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-5.svg', 287, 396, 110, 55);
    var endpointStateNode1_6 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-6.svg', 287, 396, 110, 55);
    var endpointStateNode1_7 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node1-7.svg', 287, 396, 110, 55);
    var endpointStateNode2_0 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node2-0.svg', 287, 396, 790, 55);
    var endpointStateNode2_1 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node2-1.svg', 287, 396, 790, 55);
    var endpointStateNode2_2 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node2-2.svg', 287, 396, 790, 55);
    var endpointStateNode2_3 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node2-3.svg', 287, 396, 790, 55);
    var endpointStateNode2_4 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node2-4.svg', 287, 396, 790, 55);
    var endpointStateNode2_5 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node2-5.svg', 287, 396, 790, 55);
    var endpointStateNode2_6 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/endpoint-state-node2-6.svg', 287, 396, 790, 55);

    var synArrow = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/arrow1-sc.svg', 278, 11, 460, 150);
    var syn0 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-0.svg', 299, 186, 400, 60);
    var syn1 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-1.svg', 299, 186, 400, 60);
    var syn2 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-2.svg', 299, 186, 400, 60);
    var syn3 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-3.svg', 299, 186, 400, 60);
    var syn4 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-4.svg', 299, 186, 400, 60);
    var syn5 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-5.svg', 299, 186, 488, 60);
    var syn6 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-6.svg', 299, 186, 488, 60);
    var syn7 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/syn-7.svg', 299, 186, 488, 60);

    var ack0 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack-0.svg', 299, 186, 520, 260);
    var ack1 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack-1.svg', 299, 186, 520, 260);
    var ack2 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack-2.svg', 299, 186, 520, 260);
    var ack3 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack-3.svg', 299, 186, 520, 260);
    var ack4 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack-4.svg', 299, 186, 365, 260);
    var ack5 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack-5.svg', 299, 186, 365, 260);

    var ack2_0 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack2-0.svg', 299, 186, 400, 60);
    var ack2_1 = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack2-1.svg', 299, 186, 488, 60);

    var ackArrow = registerSVG('snc', 'images/cassandra/internals/distributed-architecture/gossip/ack-arrow.svg', 282, 11, 460, 350);

    var all = [arrow1sc,largeNodeA, largeNodeB,ackArrow,
      endpointStateNode1_0,endpointStateNode1_1,endpointStateNode1_2,endpointStateNode1_3,endpointStateNode1_4,
      endpointStateNode1_5,endpointStateNode1_6,endpointStateNode1_7,endpointStateNode2_0,endpointStateNode2_1,
      endpointStateNode2_2,endpointStateNode2_3,endpointStateNode2_4,endpointStateNode2_5,endpointStateNode2_6,
      synArrow,syn0,syn1,syn2,syn3,syn4,syn5,syn6,syn7,ack0,ack1,ack2,ack3,ack4,ack5,
      ack2_0,ack2_1
    ];
    all.forEach(function(i){ i.image.opacity(0); });


    addAnimation('snc', function() {
      arrow1sc.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      arrow1sc.image.animate(animationSpeed).opacity(0);
      cluster.image.animate(animationSpeed).opacity(0);
      nodeA.image.animate(animationSpeed).move(220, 210);
      nodeC.image.animate(animationSpeed).move(900, 210).after(function() {
        nodeA.image.animate(animationSpeed).opacity(0);
        nodeC.image.animate(animationSpeed).opacity(0);
        largeNodeA.image.animate(animationSpeed).opacity(1);
        largeNodeB.image.animate(animationSpeed).opacity(1).after(function(){
          endpointStateNode1_0.image.animate(animationSpeed).opacity(1);
          endpointStateNode2_0.image.animate(animationSpeed).opacity(1);
        });
      });
    });
    addAnimation('snc', function() {
      synArrow.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      syn0.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      syn1.image.animate(animationSpeed).opacity(1).after(function(){
        syn0.image.opacity(0);
      });
    });
    addAnimation('snc', function() {
      syn2.image.animate(animationSpeed).opacity(1).after(function(){
        syn1.image.opacity(0);
      });
      endpointStateNode1_1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      syn3.image.animate(animationSpeed).opacity(1).after(function(){
        syn2.image.opacity(0);
        endpointStateNode1_1.image.opacity(0);
      });
      endpointStateNode1_2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      syn4.image.animate(animationSpeed).opacity(1).after(function(){
        syn3.image.opacity(0);
        endpointStateNode1_2.image.opacity(0);
      });
      endpointStateNode1_3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      endpointStateNode1_3.image.animate(animationSpeed).opacity(0);
      syn4.image.animate(animationSpeed).move(488, 60);
      synArrow.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('snc', function() {
      syn5.image.animate(animationSpeed).opacity(1).after(function(){
        syn4.image.opacity(0);
      });
      endpointStateNode2_1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      ack0.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      ack1.image.animate(animationSpeed).opacity(1).after(function(){
        ack0.image.opacity(0);
      });
    });
    addAnimation('snc', function() {
      syn6.image.animate(animationSpeed).opacity(1).after(function(){
        syn5.image.opacity(0);
        endpointStateNode2_1.image.opacity(0);
      });
      endpointStateNode2_2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      ack2.image.animate(animationSpeed).opacity(1).after(function(){
        ack1.image.opacity(0);
      });
    });
    addAnimation('snc', function() {
      endpointStateNode2_3.image.animate(animationSpeed).opacity(1).after(function() {
        endpointStateNode2_2.image.opacity(0);
      })
      syn7.image.animate(animationSpeed).opacity(1).after(function(){
        syn6.image.opacity(0);
      });
    });
    addAnimation('snc', function() {
      ack3.image.animate(animationSpeed).opacity(1).after(function(){
        ack2.image.opacity(0);
      });
    });
    addAnimation('snc', function() {
      ackArrow.image.animate(animationSpeed).opacity(1).after(function() {
        syn7.image.animate(animationSpeed).opacity(0);
        endpointStateNode2_3.image.animate(animationSpeed).opacity(0);
        ack3.image.animate(animationSpeed).move(365, 260).after(function(){
          ackArrow.image.animate(animationSpeed).opacity(0);
        });
      });
    });
    addAnimation('snc', function() {
      ack4.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      ack2_0.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      ack4.image.animate(animationSpeed).opacity(0);
      ack5.image.animate(animationSpeed).opacity(1);
      endpointStateNode1_5.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      endpointStateNode1_6.image.animate(animationSpeed).opacity(1).after(function() {
        endpointStateNode1_5.image.opacity(0);
      });
    });
    addAnimation('snc', function() {
      ack3.image.opacity(0);
      ack5.image.animate(animationSpeed).opacity(0);
      endpointStateNode1_7.image.animate(animationSpeed).opacity(1).after(function(){
        endpointStateNode1_6.image.opacity(0);
        ack2_0.image.animate(animationSpeed).move(488, 60);
      });
    });
    addAnimation('snc', function() {
      ack2_1.image.animate(animationSpeed).opacity(1).after(function(){
        ack2_0.image.opacity(0);
      });
      endpointStateNode2_4.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      endpointStateNode2_5.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('snc', function() {
      endpointStateNode2_6.image.animate(animationSpeed).opacity(1);
      ack2_1.image.animate(animationSpeed).opacity(0);
    });
  }
});
var animationSpeed = 250;

Animation.animate(function() {
  if(registerCanvas('replr')) {
    var ringColoredWider = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/ring-colored-wider.svg', 548, 548, 295, -25);
    var ringColored = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/ring-colored.svg', 498, 498, 320, 00);
    var ringColoredSmaller = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/ring-colored-smaller.svg', 444, 444, 348, 26);
    var ringPro = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/ring-pro.svg', 500, 500, 320, 00);

    var replicationFactor1 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/replication-factor-1.svg', 500, 500, 320, 00);
    var replicationFactor2 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/replication-factor-2.svg', 500, 500, 320, 00);
    var replicationFactor3 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/replication-factor-3.svg', 500, 500, 320, 00);

    var partition59Gray = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/partition-59.svg', 106, 36, 1200, 00);
    var partition59Purple1 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/partition-59-purple.svg', 106, 36, 665, 85);
    var partition59Purple2 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/partition-59-purple.svg', 106, 36, 665, 85);
    var partition59Purple3 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/partition-59-purple.svg', 106, 36, 665, 85);

    var rfArrow1 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/rf-1-arrow.svg', 199, 207, 470, 140);
    var rfArrow2 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/rf-2-arrow.svg', 244, 208, 420, 140);
    var rfArrow3 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/rf-3-arrow.svg', 244, 228, 430, 116);

    replicationFactor3.image.opacity(0);
    replicationFactor2.image.opacity(0);
    replicationFactor1.image.opacity(0);
    ringColoredWider.image.opacity(0);
    ringColored.image.opacity(0);
    partition59Purple1.image.opacity(0);
    partition59Purple2.image.opacity(0);
    partition59Purple3.image.opacity(0);
    rfArrow1.image.opacity(0);
    rfArrow2.image.opacity(0);
    rfArrow3.image.opacity(0);

    var arrow3 = registerSVG('replr', 'images/cassandra/internals/distributed-architecture/replication/arrow3.svg', 80, 50, 760, 50);
    arrow3.image.opacity(0);
    addAnimation('replr', function() {
      replicationFactor1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('replr', function() {
      arrow3.image.animate(animationSpeed).opacity(1).after(function() {
        partition59Gray.image.animate(animationSpeed * 2).move(850, 45);
      });
    });
    addAnimation('replr', function() {
      partition59Gray.image.animate(animationSpeed).move(665, 85); // key spot
    });
    addAnimation('replr', function() {
      partition59Purple1.image.animate(animationSpeed).opacity(1).after(function() {
        partition59Gray.image.opacity(0);
      });
    });
    addAnimation('replr', function() {
      rfArrow1.image.animate(animationSpeed).opacity(1).after(function() {
        partition59Purple1.image.animate(animationSpeed * 2).move(375, 380);
      });
    });
    addAnimation('replr', function() {
      rfArrow1.image.animate(animationSpeed).opacity(0);
      partition59Purple1.image.animate(animationSpeed).opacity(0);
      arrow3.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('replr', function() {
      replicationFactor1.image.animate(animationSpeed).opacity(0).after(function(){
        replicationFactor2.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('replr', function() {
      ringColored.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('replr', function() {
      partition59Purple1.image.move(1200, 0);
      partition59Purple1.image.opacity(1);
      arrow3.image.animate(animationSpeed).opacity(1).after(function() {
        partition59Purple1.image.animate(animationSpeed * 2).move(665, 85);
      });
    });
    addAnimation('replr', function() {
      rfArrow2.image.animate(animationSpeed).opacity(1).after(function(){
        partition59Purple2.image.opacity(1);
        partition59Purple1.image.animate(animationSpeed * 2).move(375, 380);
        partition59Purple2.image.animate(animationSpeed * 2).move(312, 235);
      });
    });
    addAnimation('replr', function() {
      arrow3.image.animate(animationSpeed).opacity(0);
      rfArrow2.image.animate(animationSpeed).opacity(0);
      partition59Purple1.image.animate(animationSpeed).opacity(0);
      partition59Purple2.image.animate(animationSpeed).opacity(0).after(function() {
        partition59Purple1.image.move(1200, 0);
        partition59Purple1.image.opacity(1);
        partition59Purple2.image.opacity(0);
        partition59Purple2.image.move(665, 85);
      });
    });
    addAnimation('replr', function() {
      replicationFactor2.image.animate(animationSpeed).opacity(0).after(function(){
        replicationFactor3.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('replr', function() {
      ringColoredWider.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('replr', function() {
      arrow3.image.animate(animationSpeed).opacity(1).after(function() {
        partition59Purple1.image.animate(animationSpeed * 2).move(665, 85);
      });
    });
    addAnimation('replr', function() {
      rfArrow3.image.animate(animationSpeed).opacity(1).after(function() {
        partition59Purple1.image.animate(animationSpeed * 2).move(375, 380);
        partition59Purple2.image.opacity(1);
        partition59Purple3.image.opacity(1);
        partition59Purple2.image.animate(animationSpeed * 2).move(312, 235);
        partition59Purple3.image.animate(animationSpeed * 2).move(375, 85);
      });
    });
    addAnimation('replr', function() {
      partition59Purple1.image.animate(animationSpeed).opacity(0);
      partition59Purple2.image.animate(animationSpeed).opacity(0);
      partition59Purple3.image.animate(animationSpeed).opacity(0);
      arrow3.image.animate(animationSpeed).opacity(0);
      rfArrow3.image.animate(animationSpeed).opacity(0);
    });
  }
});

Animation.animate(function() {
  if(registerCanvas('rqst')) {
    var ringColoredWider = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/ring-colored-wider.svg', 548, 548, 295, -25);
    var ringColored = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/ring-colored.svg', 498, 498, 320, 00);
    var ringColoredSmaller = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/ring-colored-smaller.svg', 444, 444, 348, 26);
    var ringPro = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/ring-pro.svg', 500, 500, 320, 00);
    var partition59 = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/partition-59-purple.svg', 106, 36, 312, 235);

    var request59Arrow1 = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/request59-arrow-1.svg', 70, 54, 760, 405);
    var request59Arrow2 = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/request59-arrow-2.svg', 230, 98, 430, 270);

    var x1 = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/x.svg', 81, 87, 385, 60);
    var x2 = registerSVG('rqst', 'images/cassandra/internals/distributed-architecture/replication/x.svg', 81, 87, 385, 355);

    request59Arrow1.image.opacity(0);
    request59Arrow2.image.opacity(0);
    partition59.image.opacity(0);

    addAnimation('rqst', function() {
      request59Arrow1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rqst', function() {
      request59Arrow2.image.animate(animationSpeed).opacity(1);
      partition59.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rqst', function() {
      partition59.image.animate(1000).move(1300, 600).after(function() {
        request59Arrow1.image.animate(animationSpeed).opacity(0);
        request59Arrow2.image.animate(animationSpeed).opacity(0);
      });
    });
  }
});

Animation.animate(function() {
  if(registerCanvas('mdat')) {
    var dcWest = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-west.svg', 260, 294, 236, 58);
    var dcEast = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-east.svg', 260, 294, 650, 58);
    var fullRing = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/ring-colored-smaller.svg', 444, 444, 355, 5);
    var dcWestDonut = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-west-donut.svg', 210, 210, 260, 110);
    var dcEastDonut = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-east-donut.svg', 210, 210, 676, 110);

    var node0 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node0.svg', 71, 69, 540, 10);
    var node1 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node1.svg', 71, 69, 675, 65);
    var node2 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node2.svg', 71, 69, 725, 190);
    var node3 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node3.svg', 71, 69, 675, 320);
    var node4 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node4.svg', 71, 69, 540, 372);
    var node5 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node5.svg', 71, 69, 410, 320);
    var node6 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node6.svg', 71, 69, 355, 190);
    var node7 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/node7.svg', 71, 69, 405, 65);
    var createKeyspace = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/create-keyspace.svg', 363, 86, 0, 0);
    var arrow1 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-arrow1.svg', 148, 48, 180, 260);
    var arrow2 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-arrow2.svg', 102, 100, 290, 165);
    var arrow3 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-arrow3.svg', 270, 12, 410, 300);
    var arrow4 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/dc-arrow4.svg', 101, 77, 708, 180);
    var data68_1 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/partition-59-bright.svg', 106, 36, -130, 200);
    var data68_2 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/partition-59-bright.svg', 106, 36, 310, 315);
    var data68_3 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/partition-59-bright.svg', 106, 36, 310, 315);
    var data68_4 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/partition-59-bright.svg', 106, 36, 660, 315);
    var data68_5 = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/partition-59-bright.svg', 106, 36, 660, 315);
    var coordinatorLabel = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/coordinator-label.svg', 117, 17, 310, 360);
    var remoteCoordinatorLabel = registerSVG('mdat', 'images/cassandra/internals/distributed-architecture/replication/remote-coordinator-label.svg', 196, 17, 620, 360);

    dcWestDonut.image.opacity(0);
    dcEastDonut.image.opacity(0);

    var all = [dcWest, dcEast, arrow1, arrow2, arrow3, arrow4,
             data68_2, data68_3, data68_4, data68_5, coordinatorLabel, remoteCoordinatorLabel, createKeyspace];
    var all2 = [arrow1, arrow2, arrow3, arrow4, data68_1,
                data68_2, data68_3, data68_4, data68_5, coordinatorLabel, remoteCoordinatorLabel];
    all.forEach(function(i){ i.image.opacity(0); });
    addAnimation('mdat', function() {
      fullRing.image.animate(animationSpeed).opacity(0);
      var s = animationSpeed * 2;
      node0.image.animate(s).move(330, 90);
      node2.image.animate(s).move(420, 182);
      node4.image.animate(s).move(330, 270);
      node6.image.animate(s).move(240, 182);

      node1.image.animate(s).move(810, 115);
      node3.image.animate(s).move(810, 245);
      node5.image.animate(s).move(680, 245);
      node7.image.animate(s).move(680, 115).after(function(){
        dcWest.image.animate(animationSpeed).opacity(1);
        dcEast.image.animate(animationSpeed).opacity(1);
        dcWestDonut.image.animate(animationSpeed).opacity(1);
        dcEastDonut.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('mdat', function() {
      createKeyspace.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('mdat', function() {
      arrow1.image.animate(animationSpeed).opacity(1).after(function(){
        data68_1.image.animate(animationSpeed).move(310, 315).after(function(){
          coordinatorLabel.image.animate(animationSpeed).opacity(1);
        });
      });
    });
    addAnimation('mdat', function() {
      arrow3.image.animate(animationSpeed).opacity(1)
      arrow2.image.animate(animationSpeed).opacity(1).after(function() {
        data68_1.image.opacity(1);
        data68_2.image.opacity(1);
        data68_3.image.opacity(1);
        data68_1.image.animate(animationSpeed).move(660, 315).after(function(){
          remoteCoordinatorLabel.image.animate(animationSpeed).opacity(1);
        });
        data68_2.image.animate(animationSpeed).move(220, 200);
        data68_3.image.animate(animationSpeed).move(310, 110);
      });
    });
    addAnimation('mdat', function() {
      arrow4.image.animate(animationSpeed).opacity(1).after(function() {
        data68_4.image.opacity(1);
        data68_5.image.opacity(1);
        data68_1.image.animate(animationSpeed).move(660, 260);
        data68_4.image.animate(animationSpeed).move(660, 130);
        data68_5.image.animate(animationSpeed).move(790, 130);
      });
    });
    addAnimation('mdat', function() {
      all2.forEach(function(i){ i.image.animate(animationSpeed).opacity(0); });
    });
  }
});
var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('dueji')) {
    var cap = registerSVG('dueji', 'images/cassandra/internals/distributed-architecture/consistency-level/cap-theorem.svg', 558, 430, 320, 0);
    var cassandraLabel = registerSVG('dueji', 'images/cassandra/internals/distributed-architecture/consistency-level/cassandra-label.svg', 120, 17, 605, 230);
    cassandraLabel.image.opacity(0);
    addAnimation('dueji', function() {
      cassandraLabel.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('cftw')) {
    var ring = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/ring.svg', 373, 360, 440, 0);
    var arrow1 = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow1.svg', 90, 32, 500, -10);
    var clientLabel = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/client-label.svg', 70, 20, 440, 5);
    var arrow2 = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow2.svg', 225, 210, 535, 60);
    var arrow3 = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow3.svg', 139, 65, 630, 55);
    var arrow4 = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow4.svg', 83, 200, 550, 65);
    var arrow5 = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow5.svg', 109, 200, 622, 65);
    var arrow6 = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow6.svg', 104, 26, 490, 0);
    var clOne = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/cl-one.svg', 82, 17, 720, 10);
    var clQuorum = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/cl-quorum.svg', 131, 18, 720, 10);
    var clAll = registerSVG('cftw', 'images/cassandra/internals/distributed-architecture/consistency-level/cl-all.svg', 76, 17, 720, 10);
    var all = [arrow1, clientLabel, arrow2, arrow3,
              arrow4, arrow5, arrow6, clOne, clQuorum, clAll];
    all.forEach(function(i){ i.image.opacity(0); });
    addAnimation('cftw', function() {
      clientLabel.image.animate(animationSpeed).opacity(1);
      arrow1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cftw', function() {
      arrow2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cftw', function() {
      clOne.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cftw', function() {
      arrow3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cftw', function() {
      arrow6.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cftw', function() {
      clOne.image.animate(animationSpeed).opacity(0).after(function() {
        clQuorum.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('cftw', function() {
      arrow4.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cftw', function() {
      clQuorum.image.animate(animationSpeed).opacity(0).after(function() {
        clAll.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('cftw', function() {
      arrow5.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('hicu')) {
    var ring2 = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/ring2.svg', 405, 413, 400, 20);
    var arrow1 = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow2.1.svg', 92, 49, 300, 170);
    var arrow2 = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow2.2.svg', 262, 271, 475, 90);
    var arrow3 = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow2.3.svg', 114, 122, 470, 240);
    var arrow4 = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow2.4.svg', 101, 55, 300, 155);
    var clientLabel = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/client-label2.svg', 117, 37, 250, 120);
    var writeLabel = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/write-label.svg', 150, 12, 550, 0);
    var readLabel = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/read-label.svg', 150, 12, 450, 410);
    var rfLabel = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/rf-label.svg', 120, 26, 565, 215);
    var bigCircle = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/big-oval.svg', 333, 421, 460, 16);
    var littleCircle = registerSVG('hicu', 'images/cassandra/internals/distributed-architecture/consistency-level/little-oval.svg', 82, 86, 562, 352);
    var all = [arrow1, arrow2, arrow3, arrow4, clientLabel,
              writeLabel, readLabel, rfLabel, bigCircle, littleCircle];
    all.forEach(function(i){ i.image.opacity(0); });
    addAnimation('hicu', function() {
      clientLabel.image.animate(animationSpeed).opacity(1);
      arrow1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('hicu', function() {
      arrow2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('hicu', function() {
      writeLabel.image.animate(animationSpeed).opacity(1);
      bigCircle.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('hicu', function() {
      readLabel.image.animate(animationSpeed).opacity(1);
      littleCircle.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('hicu', function() {
      arrow3.image.animate(animationSpeed).opacity(1);
      arrow4.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('strq')) {
    var ring = registerSVG('strq', 'images/cassandra/internals/distributed-architecture/consistency-level/cl-one-ring.svg', 542, 412, 260, 25);
    var initialRequest1 = registerSVG('strq', 'images/cassandra/internals/distributed-architecture/consistency-level/initial-request-arrows-1.svg', 110, 57, 284, 165);
    var initialRequest2 = registerSVG('strq', 'images/cassandra/internals/distributed-architecture/consistency-level/initial-request-arrows-2.svg', 110, 57, 284, 165);
    var requestOne = registerSVG('strq', 'images/cassandra/internals/distributed-architecture/consistency-level/quorum-write.svg', 494, 293, 386, 0);
    var requestTwo = registerSVG('strq', 'images/cassandra/internals/distributed-architecture/consistency-level/quorum-read.svg', 347, 274, 460, 180);
    initialRequest1.image.opacity(0);
    initialRequest2.image.opacity(0);
    requestOne.image.opacity(0);
    requestTwo.image.opacity(0);
    addAnimation('strq', function() {
      initialRequest1.image.animate(animationSpeed).opacity(1);
      requestOne.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('strq', function() {
      initialRequest2.image.animate(animationSpeed).opacity(1);
      requestTwo.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('cloney')) {
    var ring = registerSVG('cloney', 'images/cassandra/internals/distributed-architecture/consistency-level/cl-one-ring.svg', 542, 412, 260, 25);
    var initialRequest1 = registerSVG('cloney', 'images/cassandra/internals/distributed-architecture/consistency-level/initial-request-arrows-1.svg', 110, 57, 284, 165);
    var initialRequest2 = registerSVG('cloney', 'images/cassandra/internals/distributed-architecture/consistency-level/initial-request-arrows-2.svg', 110, 57, 284, 165);
    var requestOne = registerSVG('cloney', 'images/cassandra/internals/distributed-architecture/consistency-level/cl-one-request-1.svg', 240, 229, 455, 0);
    var requestTwo = registerSVG('cloney', 'images/cassandra/internals/distributed-architecture/consistency-level/cl-one-request-2.svg', 245, 210, 455, 240);
    initialRequest1.image.opacity(0);
    initialRequest2.image.opacity(0);
    requestOne.image.opacity(0);
    requestTwo.image.opacity(0);
    addAnimation('cloney', function() {
      initialRequest1.image.animate(animationSpeed).opacity(1);
      requestOne.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cloney', function() {
      initialRequest2.image.animate(animationSpeed).opacity(1);
      requestTwo.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('qvlq')) {
    var ring2 = registerSVG('qvlq', 'images/cassandra/internals/distributed-architecture/consistency-level/two-dcs.svg', 522, 241, 330, 50);
    var arrow1 = registerSVG('qvlq', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow3.1.svg', 147, 68, 280, 0);
    var arrow2 = registerSVG('qvlq', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow3.2.svg', 140, 144, 395, 100);
    var arrow3 = registerSVG('qvlq', 'images/cassandra/internals/distributed-architecture/consistency-level/arrow3.3.svg', 310, 175, 480, 65);
    var localQuorum = registerSVG('qvlq', 'images/cassandra/internals/distributed-architecture/consistency-level/local-quorum.svg', 259, 277, 325, 44);
    var quorum = registerSVG('qvlq', 'images/cassandra/internals/distributed-architecture/consistency-level/quorum.svg', 600, 320, 315, 30);

    var all = [arrow1, arrow2, arrow3, localQuorum, quorum];
    all.forEach(function(i){ i.image.opacity(0); });

    addAnimation('qvlq', function() {
      arrow1.image.animate(animationSpeed).opacity(1);
      arrow2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('qvlq', function() {
      localQuorum.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('qvlq', function() {
      arrow3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('qvlq', function() {
      quorum.image.animate(animationSpeed).opacity(1);
    });
  }
});
var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('hhdoff')) {
    var cluster = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/cluster.svg', 461, 462, 400, 0);
    var arrow1 = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/arrow-1.svg', 270, 42, 120, 190);
    var arrow2 = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/arrow-2.svg', 123, 128, 480, 80);
    var arrow3 = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/arrow-3.svg', 292, 12, 485, 230);
    var arrow4 = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/arrow-4.svg', 117, 119, 480, 260);
    var data1 = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/data.svg', 108, 40, -100, 180);
    var data2 = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/data.svg', 108, 40, 385, 210);
    var data3 = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/data.svg', 108, 40, 385, 210);
    var x = registerSVG('hhdoff', 'images/cassandra/internals/distributed-architecture/hinted-handoff/x.svg', 79, 76, 592, 380);
    var all = [arrow1, arrow2, arrow3, arrow4, data2, data3, x];
    all.forEach(function(i) { i.image.opacity(0); });
    addAnimation('hhdoff', function() {
      // data 390 203
      arrow1.image.animate(animationSpeed).opacity(1).after(function() {
        data1.image.animate(animationSpeed).move(385, 210);
      });
    });
    addAnimation('hhdoff', function() {
      data2.image.opacity(1);
      data3.image.opacity(1);
      arrow2.image.animate(animationSpeed).opacity(1).after(function() {
        data3.image.animate(animationSpeed).move(575,20);
      });
      arrow3.image.animate(animationSpeed).opacity(1).after(function() {
        data2.image.animate(animationSpeed).move(765,210);
      });
      arrow4.image.animate(animationSpeed).opacity(1).after(function() {
        data1.image.animate(animationSpeed, '<').move(500, 330).after(function(){
          x.image.opacity(1);
        });
      });
    });
    addAnimation('hhdoff', function() {
      data1.image.animate(animationSpeed).move(390, 260).after(function() {
        data2.image.animate(animationSpeed).opacity(0);
        data3.image.animate(animationSpeed).opacity(0);
        arrow2.image.animate(animationSpeed).opacity(0);
        arrow3.image.animate(animationSpeed).opacity(0);
        arrow4.image.animate(animationSpeed).opacity(0);
        arrow1.image.animate(animationSpeed).opacity(0);
      });
    });
    addAnimation('hhdoff', function() {
      x.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('hhdoff', function() {
      data1.image.animate(animationSpeed).opacity(1).after(function(){
        arrow4.image.animate(animationSpeed).opacity(1);
        data1.image.animate(animationSpeed).move(575, 400).after(function() {
          data1.image.animate(animationSpeed).opacity(0);
          arrow4.image.animate(animationSpeed).opacity(0);
        });
      });
    });
  }
});
var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('nrred')) {
    var cluster = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/cluster.svg', 497, 493, 400, 25);
    var arrow1 = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/arrow1.svg', 153, 29, 240, 235);
    var arrow3 = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/arrow3.svg', 287, 165, 500, 110);
    var arrow2 = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/arrow2-2.svg', 289, 324, 500, 105);
    var consistencyLevel = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/consistency-level.svg', 366, 584, 527, 0);
    var data = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/data.svg', 96, 44, 600, 450);
    var hash23_1 = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/hash-23.svg', 96, 44, 600, 50);
    var hash23_2 = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/hash-23.svg', 96, 44, 800, 250);
    var hash23_3 = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/hash-23.svg', 96, 44, 400, 320);
    var all = [arrow1, arrow2, arrow3, consistencyLevel, data, hash23_1, hash23_2, hash23_3];
    all.forEach(function(i){i.image.opacity(0);});
  //  var hash23_3 = registerSVG('nrred', 'images/cassandra/internals/distributed-architecture/read-repair/hash-23.svg', 96, 44, 0, 0);
    addAnimation('nrred', function() {
      arrow1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('nrred', function() {
      consistencyLevel.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('nrred', function() {
      arrow2.image.animate(animationSpeed).opacity(1);
      arrow3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('nrred', function() {
      data.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('nrred', function() {
      hash23_1.image.animate(animationSpeed).opacity(1);
      hash23_2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('nrred', function() {
      data.image.animate(animationSpeed).move(400, 320);
    });
    addAnimation('nrred', function() {
      hash23_1.image.animate(animationSpeed).move(400, 200);
      hash23_2.image.animate(animationSpeed).move(400, 260);
    });
    addAnimation('nrred', function() {
      hash23_3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('nrred', function() {
      hash23_1.image.animate(animationSpeed).move(400, 260);
      hash23_3.image.animate(animationSpeed).move(400, 260).after(function() {
        hash23_1.image.animate(animationSpeed).opacity(0);
        hash23_2.image.animate(animationSpeed).opacity(0);
        hash23_3.image.animate(animationSpeed).opacity(0);
      });
    });
    addAnimation('nrred', function() {
      data.image.animate(animationSpeed).move(-200,200);
      arrow1.image.animate(animationSpeed).opacity(0);
      arrow2.image.animate(animationSpeed).opacity(0);
      arrow3.image.animate(animationSpeed).opacity(0);
    });
  }
});


Animation.animate(function () {
  if(registerCanvas('rdrpairr')) {
    var cluster = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/cluster.svg', 497, 493, 400, 25);
    var arrow1 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/arrow1.svg', 153, 29, 240, 235);
    var arrow3 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/arrow3.svg', 287, 165, 500, 110);
    var arrow2 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/arrow2-2.svg', 289, 324, 500, 105);
    var consistencyLevel = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/consistency-level.svg', 366, 584, 527, 0);
    var data = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/data.svg', 96, 44, 600, 450);
    var hash42 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/hash-42.svg', 96, 44, 800, 250);
    var hash69 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/hash-69.svg', 96, 44, 600, 50);
    var hash23 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/hash-23.svg', 96, 44, 400, 320);

    var data122 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/data-122.svg', 232, 44, 530, 50);
    var data159_1 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/data-159.svg', 232, 44, 330, 260);
    var data159 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/data-159.svg', 232, 44, 730, 250);
    var data135 = registerSVG('rdrpairr', 'images/cassandra/internals/distributed-architecture/read-repair/data-135.svg', 232, 44, 330, 320);

    var all = [arrow1, arrow2, consistencyLevel, data, hash23, hash42, hash69,
               data122, data159,data135,arrow3,data159_1];
    all.forEach(function(i){i.image.opacity(0);});
    addAnimation('rdrpairr', function() {
      arrow1.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      consistencyLevel.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      arrow2.image.animate(animationSpeed).opacity(1);
      arrow3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      data.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      hash42.image.animate(animationSpeed).opacity(1);
      hash69.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      data.image.animate(animationSpeed).move(400, 320);
    });
    addAnimation('rdrpairr', function() {
      hash69.image.animate(animationSpeed).move(400, 200);
      hash42.image.animate(animationSpeed).move(400, 260);
      arrow2.image.animate(animationSpeed).opacity(0);
      arrow3.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('rdrpairr', function() {
      hash23.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      hash23.image.animate(animationSpeed).move(400, 260);
      hash69.image.animate(animationSpeed).move(400, 260).after(function() {
        hash69.image.animate(animationSpeed).opacity(0);
        hash42.image.animate(animationSpeed).opacity(0);
      });
    });
    addAnimation('rdrpairr', function() {
      hash23.image.animate(animationSpeed).opacity(0);
      hash42.image.animate(animationSpeed).opacity(0);
      hash69.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('rdrpairr', function() {
      data135.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      arrow3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      data122.image.animate(animationSpeed).opacity(1);
      data159.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('rdrpairr', function() {
      data122.image.animate(animationSpeed).move(330, 200);
      data159.image.animate(animationSpeed).move(330, 260);
      arrow3.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('rdrpairr', function() {
      data.image.move(400, 260);
      data122.image.animate(animationSpeed).opacity(0);
      data135.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('rdrpairr', function() {
      data159.image.animate(animationSpeed).move(530, 50);
      data159_1.image.opacity(1);
      data159_1.image.animate(animationSpeed).move(525, 455);
      data.image.animate(animationSpeed).move(-200,200);
    });
    addAnimation('rdrpairr', function() {
      data159.image.animate(animationSpeed).opacity(0);
      data159_1.image.animate(animationSpeed).opacity(0);
      arrow1.image.animate(animationSpeed).opacity(0);
      arrow3.image.animate(animationSpeed).opacity(0);
      consistencyLevel.image.animate(animationSpeed).opacity(0);
    });
  }
});
var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('happyserver')) {
    var server = registerSVG('happyserver', 'images/cassandra/internals/node-architecture/storage-engine/write-path/node-single.svg', 395, 395, 600, 0);
    var longArrow = registerSVG('happyserver', 'images/cassandra/internals/node-architecture/storage-engine/write-path/long-arrow.svg', 600, 300, 0, 0);
    var row = registerSVG('happyserver', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-1-houston.png', 385, 35, -500, 75);
    longArrow.image.opacity(0);
    addAnimation('happyserver', function() {
      longArrow.image.animate(animationSpeed).opacity(1).after(function(){
        row.image.animate(750).move(600, 180);
      });
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('writepth')) {
    var server = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/server-background.svg', 1083, 546, 20, 0);
    var server2 = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/server-background-two-drives.svg', 1083, 546, 20, 0);
    var server3 = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/server-background-no-hdd-1.svg', 1083, 546, 20, 0);
    var server4 = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/server-background-hdd-2.svg', 1083, 546, 20, 0);
    var ack = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/ack.svg', 123, 30, -3, 258);
    var commitLogLbl = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/commit-log-label.svg', 204, 30, 75, 30);
    var commitLogsLbl = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/commit-logs-label.svg', 206, 31, 230, 115);
    var memTableLbl = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/mem-table-label.svg', 184, 30, 95, 315);
    var sstableLbl = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/sstable-label.svg', 184, 30, 500, 30);
    var immutableLbl = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/immutable-label.svg', 102, 23, 500, 60);
    var verticalLine = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/vertical-line.svg', 5, 227, 670, 22);
    verticalLine.image.opacity(0);
    sstableLbl.image.opacity(0);
    immutableLbl.image.opacity(0);
    server2.image.opacity(0);

    var row1Log = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-1-houston.png', 385, 35, -500, 255);
    var row1Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-1-houston.png', 385, 35, 40, 255);
    var row2Log = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-2-dallas.png', 371, 35, -500, 255);
    var row2Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-2-dallas.png', 371, 35, 40, 255);
    var row3Log = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-3-snyder.png', 385, 35, -500, 255);
    var row3Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-3-snyder.png', 385, 35, 40, 255);
    var row4Log = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-4-austin.png', 385, 35, -500, 255);
    var row4Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-4-austin.png', 385, 35, 40, 255);
    var row5Log = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-5-dallas.png', 385, 35, -500, 255);
    var row5Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-5-dallas.png', 385, 35, 40, 255);
    var row6Log = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-6-el-paso.png', 385, 35, -500, 255);
    var row6Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-6-el-paso.png', 385, 35, 40, 255);

    var row7Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-7-austin.png', 385, 35, -500, 255);
    var row8Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-8-san-antonio.png', 385, 35, -500, 255);
    var row9Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-3-snyder-dup.png', 385, 35, -500, 255);
    var row10Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-10-dallas.png', 385, 35, -500, 255);
    var row11Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-11-austin.png', 385, 35, -500, 255);
    var row12Mem = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/row-12-houston.png', 385, 35, -500, 255);

    var redX = registerSVG('writepth', 'images/cassandra/internals/node-architecture/storage-engine/write-path/red-x.svg', 166, 303, 400, -20);
    redX.image.opacity(0);
    server3.image.opacity(0);
    server4.image.opacity(0);
    commitLogsLbl.image.opacity(0);

    commitLogLbl.image.opacity(0);
    memTableLbl.image.opacity(0);
    row1Mem.image.opacity(0);
    row2Mem.image.opacity(0);
    row3Mem.image.opacity(0);
    row4Mem.image.opacity(0);
    row5Mem.image.opacity(0);
    row6Mem.image.opacity(0);
    ack.image.opacity(0);
    addAnimation('writepth', function() {
      row1Log.image.animate(animationSpeed).move(40, 255);
    });
    addAnimation('writepth', function() {
      row1Mem.image.opacity(1);
      row1Log.image.animate(animationSpeed).move(280, 30);
      row1Mem.image.animate(animationSpeed).move(280, 310).after(function() {
        commitLogLbl.image.animate(animationSpeed).opacity(1);
        memTableLbl.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('writepth', function() {
      ack.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('writepth', function() {
      ack.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('writepth', function() {
      row2Log.image.animate(animationSpeed).move(40, 255);
    });
    addAnimation('writepth', function() {
      row2Mem.image.opacity(1);
      row2Log.image.animate(animationSpeed).move(287, 64);
    });
    addAnimation('writepth', function() {
      row2Mem.image.animate(animationSpeed).move(287, 310);
      row1Mem.image.animate(animationSpeed).move(280, 344);
    });
    addAnimation('writepth', function() {
      row3Log.image.animate(animationSpeed).move(40, 255);
    });
    addAnimation('writepth', function() {
      row3Mem.image.opacity(1);
      row3Mem.image.animate(animationSpeed).move(280, 378);
      row3Log.image.animate(animationSpeed).move(280, 98);
    });
    addAnimation('writepth', function() {
      row4Log.image.animate(animationSpeed).move(40, 255);
    });
    addAnimation('writepth', function() {
      row4Mem.image.opacity(1);
      row4Log.image.animate(animationSpeed).move(280, 132);
      row4Mem.image.animate(animationSpeed).move(280, 310);
      row1Mem.image.animate(animationSpeed).move(280, 378);
      row2Mem.image.animate(animationSpeed).move(287, 344);
      row3Mem.image.animate(animationSpeed).move(280, 412);
    });
    addAnimation('writepth', function() {
      row5Log.image.animate(animationSpeed).move(40, 255);
    });
    addAnimation('writepth', function() {
      row5Mem.image.opacity(1);
      row5Log.image.animate(animationSpeed).move(280, 166);
      row5Mem.image.animate(animationSpeed).move(280, 344);
      row1Mem.image.animate(animationSpeed).move(280, 412);
      row2Mem.image.animate(animationSpeed).move(287, 378);
      row3Mem.image.animate(animationSpeed).move(280, 446);
    });
    addAnimation('writepth', function() {
      row6Log.image.animate(animationSpeed).move(40, 255);
    });
    addAnimation('writepth', function() {
      row6Mem.image.opacity(1);
      row6Log.image.animate(animationSpeed).move(280, 200);
      row6Mem.image.animate(animationSpeed).move(280, 412);
      row1Mem.image.animate(animationSpeed).move(280, 446);
      row3Mem.image.animate(animationSpeed).move(280, 480);
    });
    addAnimation('writepth', function() {
      memTableLbl.image.animate(animationSpeed).opacity(0);
      verticalLine.image.animate(animationSpeed).opacity(1);
      row4Mem.image.animate(animationSpeed).move(680, 30);
      row5Mem.image.animate(animationSpeed).move(680, 64);
      row2Mem.image.animate(animationSpeed).move(687, 98);
      row6Mem.image.animate(animationSpeed).move(680, 132);
      row1Mem.image.animate(animationSpeed).move(680, 166);
      row3Mem.image.animate(animationSpeed).move(680, 200);
    });
    addAnimation('writepth', function() {
      redX.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('writepth', function() {
      row1Log.image.animate(animationSpeed).opacity(0);
      row2Log.image.animate(animationSpeed).opacity(0);
      row3Log.image.animate(animationSpeed).opacity(0);
      row4Log.image.animate(animationSpeed).opacity(0);
      row5Log.image.animate(animationSpeed).opacity(0);
      row6Log.image.animate(animationSpeed).opacity(0);
      verticalLine.image.animate(animationSpeed).opacity(0);
      commitLogLbl.image.animate(animationSpeed).opacity(0);
      redX.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('writepth', function() {
      sstableLbl.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('writepth', function() {
      immutableLbl.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('writepth', function() {
      sstableLbl.image.animate(animationSpeed).opacity(0);
      immutableLbl.image.animate(animationSpeed).opacity(0);
      server2.image.animate(animationSpeed).opacity(1);
      commitLogsLbl.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('writepth', function() {
      server3.image.animate(animationSpeed).opacity(1);
      commitLogsLbl.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('writepth', function() {
      server4.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('writepth', function() {
      row4Mem.image.animate(animationSpeed).move(220, 30);
      row5Mem.image.animate(animationSpeed).move(220, 64);
      row2Mem.image.animate(animationSpeed).move(227, 98);
      row6Mem.image.animate(animationSpeed).move(220, 132);
      row1Mem.image.animate(animationSpeed).move(220, 166);
      row3Mem.image.animate(animationSpeed).move(220, 200);
    });
    addAnimation('writepth', function() {
      row7Mem.image.animate(animationSpeed).move(220, 310).after(function() {
        row8Mem.image.animate(animationSpeed).move(220, 344).after(function() {
          row8Mem.image.animate(animationSpeed).move(220, 378);
          row9Mem.image.animate(animationSpeed).move(220, 344).after(function() {
            row10Mem.image.animate(animationSpeed).move(220, 344);
            row8Mem.image.animate(animationSpeed).move(220, 408);
            row9Mem.image.animate(animationSpeed).move(220, 378).after(function(){
              row11Mem.image.animate(animationSpeed).move(220, 344);
              row10Mem.image.animate(animationSpeed).move(220, 378);
              row8Mem.image.animate(animationSpeed).move(220, 442);
              row9Mem.image.animate(animationSpeed).move(220, 412).after(function(){
                row8Mem.image.animate(animationSpeed).move(220, 476);
                row12Mem.image.animate(animationSpeed).move(220, 442);
              });
            });
          });
        });
      });
    });
    addAnimation('writepth', function() {
      row7Mem.image.animate(animationSpeed).move(650, 30);
      row11Mem.image.animate(animationSpeed).move(650, 64);
      row10Mem.image.animate(animationSpeed).move(650, 98);
      row9Mem.image.animate(animationSpeed).move(650, 132);
      row12Mem.image.animate(animationSpeed).move(650, 166);
      row8Mem.image.animate(animationSpeed).move(650, 200);
    });
  }
});
var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('memss')) {
    var memTable = registerSVG('memss', 'images/cassandra/internals/node-architecture/storage-engine/read-path/memtable.svg', 494, 122, 40, 166);
    var ssTables = registerSVG('memss', 'images/cassandra/internals/node-architecture/storage-engine/read-path/sstables.svg', 494, 400, 590, 25);
    memTable.image.opacity(0);
    ssTables.image.opacity(0);
    addAnimation('memss', function() {
      ssTables.image.animate(animationSpeed).opacity(1);
      memTable.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('memss', function() {
      ssTables.image.animate(animationSpeed).opacity(.1);
    });
    addAnimation('memss', function() {
      ssTables.image.animate(animationSpeed).opacity(1);
      memTable.image.animate(animationSpeed).opacity(.1);
    });
    addAnimation('memss', function() {
      memTable.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('memreading')) {
    var memTable = registerSVG('memreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/memtable-data.svg', 486, 390, 350, 20);
    var rows = registerSVG('memreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/rows.svg', 278, 85, 515, 220);
    var query58 = registerSVG('memreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query-58.svg', 340, 41, 0, 30);
  ////  var mergeSstable = registerSVG('memreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/merge-sstable.svg', 340, 41, 0, 30);
    query58.image.opacity(0);
    addAnimation('memreading', function() {
      query58.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('memreading', function() {
      rows.image.animate(animationSpeed * 2).move(30, 30).after(function() {
        query58.image.animate(animationSpeed).opacity(0);
      });
    });
  }
});


//ssreading
Animation.animate(function () {
  if(registerCanvas('ssreading')) {
    var sstable1 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/sstable1.svg', 980, 80, 100, 100);
    var sstable2 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/sstable2.svg', 980, 80, 100, 100);
    var sstable3 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/sstable3.svg', 988, 132, 98, 50);
    var partitionIndex = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/partition-index.png', 300, 259, 420, 10);
    var query58 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query58-2.svg', 345, 158, 100, 50);
    var partition58 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/partition-58.svg', 230, 62, 780, 350);
    var bentArrow = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bent-arrow.svg', 121, 61, 680, 220);
    var largeSstable = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/big-sstable.svg', 884, 289, 150, 100);
    var partitionIndex2 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/partition-index-2.png', 330, 259, 377, 10);
    var partitionSummary = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/partition-summary.png', 373, 130, 150, 70);
    var query36 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query-36.svg', 142, 73, 80, 80);
    var query36_2 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query36-2.svg', 138, 11, 450, 150);
    var query36_3 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query36-3.svg', 142, 22, 450, 160);
    var query36_4 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query36-4.svg', 42, 119, 700, 200);
    var partition36 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/partition-36.svg', 87, 63, 692, 350);
    var keyCache1 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/keycache-1.png', 196, 34, 102, 55);
    var keyCache2 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/keycache-2.png', 200, 65, 100, 55);
    var query36_5 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query36-5.svg', 60, 60, 25, 50);
    var query36_6 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/query36-6.svg', 350, 240, 320, 100);
    var ramHddDivide = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/ram-hdd-divide.svg', 202, 270, 420, 0);
    var bloomFilter = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bloom-filter.svg', 95, 80, 60, 100);
    var bloomArrow1 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bloom-arrow.svg', 47, 12, 0, 135);
    var bloomArrow2 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bloom-arrow.svg', 47, 12, 165, 135);
    var bloom36 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bloom-36.svg', 40, 28, 0, 100);
    var bloom48 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bloom-48.svg', 39, 28, 0, 100);
    var bloom74 = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bloom-74.svg', 40, 26, 0, 100);
    var bloomX = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/bloom-x.svg', 24, 27, 175, 125);
    var questionMark = registerSVG('ssreading', 'images/cassandra/internals/node-architecture/storage-engine/read-path/question-mark.svg', 20, 27, 175, 125);


    var all = [sstable2, sstable3, query58, partitionIndex, partition58, bentArrow,
              largeSstable, partitionIndex2, partitionSummary,
              query36, query36_2, query36_3, query36_4, partition36,
              keyCache1, keyCache2, query36_5, query36_6, ramHddDivide,
              bloom36, bloom48, bloom74, questionMark, bloomArrow1, bloomArrow2, bloomX, bloomFilter];
    all.forEach(function(i) { i.image.opacity(0); });

    addAnimation('ssreading', function() {
      sstable2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      sstable3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      sstable1.image.opacity(0);
      sstable2.image.opacity(0);
      sstable3.image.animate(animationSpeed).move(100, 290).after(function(){
        partitionIndex.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('ssreading', function() {
      query58.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      bentArrow.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      partition58.image.opacity(1);
      partition58.image.animate(750).move(-300, 0).after(function(){
        query58.image.animate(animationSpeed).opacity(0);
        bentArrow.image.animate(animationSpeed).opacity(0);
      });
    });
    addAnimation('ssreading', function() {
      partitionIndex.image.animate(animationSpeed).opacity(.4);
      sstable3.image.animate(animationSpeed).opacity(.4).after(function() {
        largeSstable.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('ssreading', function() {
      partitionIndex.image.animate(animationSpeed).opacity(1);
      sstable3.image.animate(animationSpeed).opacity(1);
      largeSstable.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('ssreading', function() {
      partitionIndex2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      partitionIndex.image.opacity(0);
      partitionIndex2.image.animate(animationSpeed).move(540, 10).after(function() {
        partitionSummary.image.animate(animationSpeed).opacity(1);
        ramHddDivide.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('ssreading', function() {
      query36.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      query36_2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      query36_2.image.opacity(0);
      query36_3.image.opacity(1);
    });
    addAnimation('ssreading', function() {
      query36_4.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      partition36.image.opacity(1);
      partition36.image.animate(1500).move(-300, 0).after(function(){
        query36.image.animate(animationSpeed).opacity(0);
        query36_2.image.animate(animationSpeed).opacity(0);
        query36_3.image.animate(animationSpeed).opacity(0);
        query36_4.image.animate(animationSpeed).opacity(0).after(function() {
          partitionIndex2.image.animate(animationSpeed).move(700, 10);
          ramHddDivide.image.animate(animationSpeed).move(580, 0);
          partitionSummary.image.animate(animationSpeed).move(310, 70).after(function() {
            keyCache1.image.animate(animationSpeed).opacity(1);
            partitionIndex2.image.animate(animationSpeed).opacity(.3);
            partitionSummary.image.animate(animationSpeed).opacity(.3);
          });
        });
      });
    });
    addAnimation('ssreading', function() {
      keyCache2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      query36_5.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      query36_6.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      partition36.image.move(692, 350);
      partition36.image.animate(1500).move(-300, 0).after(function() {
        query36_5.image.animate(animationSpeed).opacity(0);
        query36_6.image.animate(animationSpeed).opacity(0);
      });
    });
    addAnimation('ssreading', function() {
      keyCache1.image.opacity(0);
      var rightShift = 150;
      keyCache2.image.animate(animationSpeed).opacity(.3).after(function() {
        partitionIndex2.image.animate(animationSpeed).move(
          partitionIndex2.image.x() + rightShift,
          partitionIndex2.image.y());
        ramHddDivide.image.animate(animationSpeed).move(
          ramHddDivide.image.x() + rightShift,
          ramHddDivide.image.y());
        partitionSummary.image.animate(animationSpeed).move(
          partitionSummary.image.x() + rightShift,
          partitionSummary.image.y());
        keyCache2.image.animate(animationSpeed).move(
          keyCache2.image.x() + rightShift,
          keyCache2.image.y()).after(function() {
            bloomFilter.image.animate(animationSpeed).opacity(1);
          });
      });
    });
    addAnimation('ssreading', function() {
      bloomArrow1.image.animate(animationSpeed).opacity(1);
      bloom36.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      bloomArrow2.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      bloomArrow1.image.animate(animationSpeed).opacity(0);
      bloom36.image.animate(animationSpeed).opacity(0);
      bloomArrow2.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('ssreading', function() {
      bloomArrow1.image.animate(animationSpeed).opacity(1);
      bloom48.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      bloomX.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      bloomArrow1.image.animate(animationSpeed).opacity(0);
      bloom48.image.animate(animationSpeed).opacity(0);
      bloomX.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('ssreading', function() {
      bloomArrow1.image.animate(animationSpeed).opacity(1);
      bloom74.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      questionMark.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('ssreading', function() {
      bloomArrow2.image.move(210, 135);
      bloomArrow2.image.animate(animationSpeed).opacity(1);
    });
  }
});
var animationSpeed = 250;

Animation.animate(function () {
  if(registerCanvas('multss')) {
    var fullRead1 = registerSVG('multss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/full-read.svg', 857, 96, 200, 0);
    var fullRead2 = registerSVG('multss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/full-read.svg', 857, 96, 200, 110);
    var fullRead3 = registerSVG('multss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/full-read.svg', 857, 96, 200, 220);
    var fullRead4 = registerSVG('multss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/full-read.svg', 857, 96, 200, 330);
    var all = [fullRead2, fullRead3, fullRead4];
    all.forEach(function(i){ i.image.opacity(0); });
    addAnimation('multss', function() {
      fullRead2.image.animate(animationSpeed).opacity(1);
      fullRead3.image.animate(animationSpeed).opacity(1);
      fullRead4.image.animate(animationSpeed).opacity(1);
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('cmppart')) {

    var p1 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2.svg', 304, 264, 210, 0);
    var p2 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2.svg', 304, 264, 720, 0);
    var p3 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p3.svg', 298, 249, 465, 0);
    var p1Label = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/partition-label.svg', 125, 27, 75, 102);
    var p2Label = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/partition-label.svg', 125, 27, 580, 102);

    var p1r1 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r1.svg', 276, 41, 222, 10);
    var p1r2_2 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r2.2.svg', 276, 41, 222, 60);
    var p1r3_4 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r3.4.svg', 276, 41, 222, 110);
    var p1r4 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r4.svg', 276, 41, 222, 160);
    var p1r5 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r5.1.svg', 276, 41, 222, 210);

    var p2r1 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r1.svg', 276, 41, 730, 10);
    var p2r2_2 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r2.2.svg', 276, 41, 730, 60);//43
    var p2r3 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r3.svg', 276, 41, 730, 110);
    var p2r5_2 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r5.2.svg', 276, 41, 730, 160);
    var p2r6 = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r6.svg', 276, 41, 730, 210);

    var p1r1g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r1g.svg', 276, 41, 122, 10);
    var p1r2_2g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r2.2g.svg', 276, 41, 122, 60);
    var p1r3_4g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r3.4g.svg', 276, 41, 122, 110);
    var p1r4g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p1r4g.svg', 276, 41, 122, 160);
    var p1r5g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r5.1g.svg', 276, 41, 122, 210);

    var p2r1g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r1g.svg', 276, 41, 830, 10);
    var p2r2_2g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r2.2g.svg', 276, 41, 830, 60);//43
    var p2r3g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r3g.svg', 276, 41, 830, 110);
    var p2r5_2g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r5.2g.svg', 276, 41, 830, 160);
    var p2r6g = registerSVG('cmppart', 'images/cassandra/internals/node-architecture/storage-engine/compaction/p2r6g.svg', 276, 41, 830, 210);

    var p1s = [p1r1, p1r2_2, p1r3_4, p1r4, p1r5];
    var p2s = [p2r1, p2r2_2, p2r3, p2r5_2, p2r6];
    var p1sg = [p1r1g, p1r2_2g, p1r3_4g, p1r4g, p1r5g];
    var p2sg = [p2r1g, p2r2_2g, p2r3g, p2r5_2g, p2r6g];

    p3.image.opacity(0);
    var split = 100;
    p1sg.forEach(function(i) {
      i.image.opacity(0);
    });
    p2sg.forEach(function(i) {
      i.image.opacity(0);
    });
    addAnimation('cmppart', function() {
      p1Label.image.animate(animationSpeed).opacity(0);
      p2Label.image.animate(animationSpeed).opacity(0).after(function() {
        p1s.forEach(function(r){ r.image.animate(animationSpeed).move(r.image.x() - split, r.image.y()); });
        p2s.forEach(function(r){ r.image.animate(animationSpeed).move(r.image.x() + split, r.image.y()); });
        p1.image.animate(animationSpeed).move(p1.image.x() - split, 0);
        p2.image.animate(animationSpeed).move(p2.image.x() + split, 0).after(function() {
          p3.image.animate(animationSpeed).opacity(1);
        });
      });
    });
    addAnimation('cmppart', function() {
      p1r1g.image.animate(animationSpeed).opacity(1);
      p2r1g.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmppart', function() {
      p1r1.image.animate(animationSpeed).opacity(0);
      p1r1g.image.animate(animationSpeed).opacity(0);
      p2r1g.image.animate(animationSpeed).opacity(0).after(function(){
        p2r1.image.animate(animationSpeed).move(476, 10)
      });
    });
    addAnimation('cmppart', function() {
      p1r2_2g.image.animate(animationSpeed).opacity(1);
      p2r2_2g.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmppart', function() {
      p1r2_2g.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('cmppart', function() {
      p2r2_2.image.opacity(0);
      p1r2_2.image.animate(animationSpeed).opacity(0);
      p2r2_2g.image.animate(animationSpeed).opacity(0);
      p2r2_2.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('cmppart', function() {
      p1r3_4g.image.animate(animationSpeed).opacity(1);
      p2r3g.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmppart', function() {
      p1r3_4.image.animate(animationSpeed).opacity(0);
      p1r3_4g.image.animate(animationSpeed).opacity(0);
      p2r3g.image.animate(animationSpeed).opacity(0).after(function() {
        p2r3.image.animate(animationSpeed).move(476, 56);
      });
    });
    addAnimation('cmppart', function() {
      p1r4g.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmppart', function() {
      p1r4g.image.animate(animationSpeed).opacity(0).after(function() {
        p1r4.image.animate(animationSpeed).move(476, 102);
      });
    });
    addAnimation('cmppart', function() {
      p2r5_2g.image.animate(animationSpeed).opacity(1);
      p1r5g.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmppart', function() {
      p1r5.image.opacity(0);
      p1r5g.image.animate(animationSpeed).opacity(0);
      p2r5_2g.image.animate(animationSpeed).opacity(0).after(function() {
        p2r5_2.image.animate(animationSpeed).move(476, 148);
      });
    });
    addAnimation('cmppart', function() {
      p2r6g.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmppart', function() {
      p2r6g.image.animate(animationSpeed).opacity(0).after(function() {
        p2r6.image.animate(animationSpeed).move(476, 194).after(function(){
          p1.image.animate(animationSpeed).opacity(0);
          p2.image.animate(animationSpeed).opacity(0);
        });
      });
    });
  }
});

Animation.animate(function () {
  if(registerCanvas('cmpss')) {
    var ss1 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s1.svg', 908, 80, 130, 0);
    var ss2 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s2.svg', 979, 80, 130, 100);
    var ss3 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3.svg', 836, 80, 130, 260);

    var s1p7 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s1p7.svg', 71, 63, 140, 9);
    var s1p13 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s1p13.svg', 190, 63, 216, 9);
    var s1p18 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s1p18.svg', 130, 63, 410, 9);
    var s1p21 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s1p21.svg', 231, 63, 544, 9);
    var s1p58 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s1p58.svg', 130, 63, 780, 9);
    var s1p92 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s1p92.svg', 113, 63, 915, 9);

    var s2p3 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s2p3.svg', 130, 63, 140, 109);
    var s2p7 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s2p7.svg', 199, 63, 275, 109);
    var s2p18 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s2p18.svg', 231, 63, 480, 109);
    var s2p36 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s2p36.svg', 87, 63, 716, 109);
    var s2p58 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s2p58.svg', 154, 63, 810, 109);
    var s2p84 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s2p84.svg', 130, 63, 970, 109);

    var s3p3 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3p3.svg', 130, 63, 140, 270);
    var s3p7 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3p7.svg', 45, 63, 276, 270);
    var s3p13 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3p13.svg', 72, 63, 327, 270);
    var s3p18 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3p18.svg', 72, 63, 406, 270);
    var s3p21 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3p21.svg', 231, 63, 484, 270);
    var s3p36 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3p36.svg', 45, 63, 721, 270);
    var s3p58 = registerSVG('cmpss', 'images/cassandra/internals/node-architecture/storage-engine/compaction/s3p58.svg', 191, 63, 770, 270);

    var allp3 = [ss3, s3p3, s3p7, s3p13, s3p18, s3p21, s3p36, s3p58 ];
    allp3.forEach(function(i) { i.image.opacity(0); });

    addAnimation('cmpss', function() {
      ss3.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmpss', function() {
      s2p3.image.animate(animationSpeed).move(140, 270);
    });
    addAnimation('cmpss', function() {
      s1p7.image.animate(animationSpeed).move(276, 230);
      s2p7.image.animate(animationSpeed).move(276, 305);
    });
    addAnimation('cmpss', function() {
      s1p7.image.animate(animationSpeed).move(276, 270);
      s2p7.image.animate(animationSpeed).move(276, 270).after(function() {
        s1p7.image.animate(animationSpeed).opacity(0);
        s2p7.image.animate(animationSpeed).opacity(0);
        s3p7.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('cmpss', function() {
      s1p13.image.animate(animationSpeed).move(328, 270);
    });
    addAnimation('cmpss', function() {
      s1p13.image.animate(animationSpeed).opacity(0);
      s3p13.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmpss', function() {
      s1p18.image.animate(animationSpeed).move(406, 230);
      s2p18.image.animate(animationSpeed).move(406, 305);
    });
    addAnimation('cmpss', function() {
      s1p18.image.animate(animationSpeed).move(406, 270);
      s2p18.image.animate(animationSpeed).move(406, 270).after(function() {
        s1p18.image.animate(animationSpeed).opacity(0);
        s2p18.image.animate(animationSpeed).opacity(0);
        s3p18.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('cmpss', function() {
      s1p21.image.animate(animationSpeed).move(484, 270);
    });
    addAnimation('cmpss', function() {
      s2p36.image.animate(animationSpeed).move(721, 270);
    });
    addAnimation('cmpss', function() {
      s2p36.image.animate(animationSpeed).opacity(0);
      s3p36.image.animate(animationSpeed).opacity(1);
    });
    addAnimation('cmpss', function() {
      s1p58.image.animate(animationSpeed).move(770, 230);
      s2p58.image.animate(animationSpeed).move(770, 305);
    });
    addAnimation('cmpss', function() {
      s1p58.image.animate(animationSpeed).move(770, 270);
      s2p58.image.animate(animationSpeed).move(770, 270).after(function() {
        s1p58.image.animate(animationSpeed).opacity(0);
        s2p58.image.animate(animationSpeed).opacity(0);
        s3p58.image.animate(animationSpeed).opacity(1);
      });
    });
    addAnimation('cmpss', function() {
      s2p84.image.animate(animationSpeed).move(970, 270);
    });
    addAnimation('cmpss', function() {
      s2p84.image.animate(animationSpeed).opacity(0);
    });
    addAnimation('cmpss', function() {
      s1p92.image.animate(animationSpeed).move(970, 270).after(function() {
        s1p92.image.animate(animationSpeed).opacity(0);
        ss1.image.animate(animationSpeed).opacity(0);
        ss2.image.animate(animationSpeed).opacity(0);
      });
    });
  }
});

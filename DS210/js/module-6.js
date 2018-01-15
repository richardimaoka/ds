




var animationSpeed = 250;

Animation.animate(function () {
  if(! registerCanvas('lvldco'))
    return;

    var etc = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/etc.svg', 89, 155, 850, 90);

    var l0lbl = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/label-L0.svg', 28, 17, 250, 33);
    var l1lbl = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/label-L1.svg', 28, 16, 250, 120);
    var l2lbl = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/label-L2.svg', 28, 16, 250, 200);

    var l0p1  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l0-p1.svg', 290, 34, 300, -35); // -35
    var l0p2  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l0-p1.svg', 287, 34, 600, -35);
    var l0p3  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l0-p1.svg', 290, 34, 300, -35);
    var l0p4  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l0-p4.svg', 362, 34, 300, -35);

    var l1p1  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l1-p1.svg', 100, 34, 296, 110);
    var l1p2  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l1-p2.svg', 178, 34, 300, 110);
    var l1p3  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l1-p3.svg', 180, 34, 485, 110);
    var l1p4  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l1-p4.svg', 160, 34, 670, 110);
    var l1p5  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l1-p5.svg', 204, 34, 670, 110);

    var l1p6  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l1-p6.svg', 63, 34, 300, 110);
    var l1p7  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l1-p7.svg', 116, 34, 300, 110);
    var l1p8  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l1-p8.svg', 217, 34, 300, 110);
    var l1p9  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l1-p9.svg', 160, 34, 520, 110);
    var l1p10  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l1-p10.svg', 275, 34, 520, 110);
    var l1p11  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l1-p11.svg', 96, 34, 300, 110);
    var l1p12  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l1-p12.svg', 204, 34, 300, 110);
    var l1p13  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l1-p13.svg', 157, 34, 511, 110);
    var l1p14  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l1-p14.svg', 431, 34, 511, 110);

    var l2p1  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l2-p1.svg', 178, 34, 300, 192); // 192, 197
    var l2p2  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l2-p2.svg', 180, 34, 485, 192);

    var l2p3  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l2-p3.svg', 62, 34, 300, 192);
    var l2p4  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l2-p4.svg', 143, 34, 300, 192);
    var l2p5  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l2-p5.svg', 281, 34, 300, 192);
    var l2p6  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l2-p6.svg', 279, 34, 585, 192);

    var l2p7  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l2-p7.svg', 91, 34, 385, 192);
    var l2p8  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/l2-p8.svg', 480, 34, 385, 192);

    var p12_1 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p12-1.svg', 50, 23, 304,-25);
    var p28_1 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p28-1.svg', 50, 23, 358, -25);
    var p52_1 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p52-1.svg', 100, 23, 412, -25);
    var p74_1 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p74-1.svg', 50, 23, 516, -25);
    var p88_1 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p88-1.svg', 16, 23, 568, -25);

    var p12_2 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p12-2.svg', 30, 23, 604, -25);
    var p28_2 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p28-2.svg', 37, 23, 638, -25);
    var p52_2 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p52-2.svg', 70, 23, 679, -25);
    var p74_2 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p74-2.svg', 96, 23, 753, -25);
    var p88_2 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p88-2.svg', 30, 23, 853, -25);

    var p12_3 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p12-3.svg', 80, 23, 304, 115);
    var p28_3 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p28-3.svg', 87, 23, 388, 115);
    var p52_3 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p52-3.svg', 170, 23, 490, 115);
    var p74_3 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p74-3.svg', 146, 23, 676, 115);
    var p88_3 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p88-3.svg', 46, 23, 824, 115);

    var p8_1 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p8-1.svg', 50, 23, 303, -25);
    var p28_4 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p28-4.svg', 50, 23, 356, -25);
    var p52_4 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p52-4.svg', 100, 23, 412, -25);
    var p88_4 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p88-4.svg', 70, 23, 516, -25);
    var p88_5 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p88-5.svg', 116, 23, 675, 115);

    var p28_5 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p28-5.svg', 137, 23, 441, 197);
    var p52_5 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p52-5.svg', 270, 23, 588, 197);

    var p47_1 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p47-1.svg', 80, 23, 305, -25);
    var p52_6 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p52-6.svg', 116, 23, 387, -25);
    var p88_6 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p88-6.svg', 153, 23, 505, -25);

    var p88_7 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p88-7.svg', 269, 23, 665, 115);
    var p52_7 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/p52-7.svg', 386, 23, 470, 197);

    var maxSsTableSize = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/max-sstable-size.svg', 167, 16, 300, 150);
    var maxSsTableSize_2 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/max-sstable-size.svg', 167, 16, 300, 150);
    var maxL1Size = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/max-l1-size.svg', 331, 27, 300, 170);
    var maxL2Size = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/max-l2-size.svg', 659, 27, 300, 232);
    var maxL1Size_2 = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/max-l1-size.svg', 659, 27, 463, 150);

    var all = [p12_3,l1p1,l1p2,p28_3,p52_3,l1p3,l1p4,p74_3,l1p4,l1p5,p88_3,
      maxL1Size,maxSsTableSize,maxSsTableSize_2,l2lbl,l2p1,l2p2,maxL2Size,maxL1Size_2,
      l0lbl,l1lbl,l1p6,l1p7,l1p8,p88_5,l1p9,l1p10,p28_5,p52_5,l2p3,l2p4,l2p5,l2p6,
      l1p11,l1p12,l1p13,l1p14,p88_7,l2p7,l2p8,p52_7,etc];
    all.forEach(function(i){ i.image.opacity(0); });

//    var  = registerSVG('lvldco', 'images/cassandra/operations/compaction/leveled/.svg', , , 0, 0);

  function combineA(
    leftPartition, rightPartition, newPartition,
    newTargetPosition,
    oldBackgroundImage, newBackgroundImage, afterFunc)
  {
    leftPartition.image.animate(animationSpeed).move(
      newTargetPosition.x,
      newTargetPosition.y).after(function()
      {
        if(newPartition)
        {
          leftPartition.image.animate(animationSpeed).opacity(0).after(function()
          {
            newPartition.image.animate(animationSpeed).opacity(1);
            if(oldBackgroundImage)
            {
              oldBackgroundImage.image.animate(animationSpeed).opacity(0);
            }
            newBackgroundImage.image.animate(animationSpeed).opacity(1).after(afterFunc);
          });
        }
        else {
          if(oldBackgroundImage)
          {
            oldBackgroundImage.image.animate(animationSpeed).opacity(0);
          }
          newBackgroundImage.image.animate(animationSpeed).opacity(1).after(afterFunc);
        }
        if(rightPartition)
          rightPartition.image.animate(animationSpeed).opacity(0);
    });
    if(rightPartition)
      rightPartition.image.animate(animationSpeed).move(
        newTargetPosition.x + leftPartition.image.width(), newTargetPosition.y);
  }
  function combine(
      leftPartition, rightPartition, newPartition,
      newTargetPosition,
      oldBackgroundImage, newBackgroundImage)
      {
        combineA(leftPartition, rightPartition, newPartition, newTargetPosition,
        oldBackgroundImage, newBackgroundImage, null);
      }


  addAnimation('lvldco', function() {
    l0p1.image.animate(animationSpeed).move(300, 25);
    p12_1.image.animate(animationSpeed).move(304, 30);
    p28_1.image.animate(animationSpeed).move(358, 30);
    p52_1.image.animate(animationSpeed).move(412, 30);
    p74_1.image.animate(animationSpeed).move(516, 30);
    p88_1.image.animate(animationSpeed).move(568, 30);
  });
  addAnimation('lvldco', function() {
    l0lbl.image.animate(animationSpeed).opacity(1);
  });
  addAnimation('lvldco', function() {
    l0p2.image.animate(animationSpeed).move(600, 25);
    p12_2.image.animate(animationSpeed).move(604, 30);
    p28_2.image.animate(animationSpeed).move(638, 30);
    p52_2.image.animate(animationSpeed).move(679, 30);
    p74_2.image.animate(animationSpeed).move(753, 30);
    p88_2.image.animate(animationSpeed).move(853, 30);
  });
  addAnimation('lvldco', function() {
    l1lbl.image.animate(animationSpeed).opacity(1);
  });
  addAnimation('lvldco', function() {
    p12_1.image.animate(animationSpeed * 1.5).move(304, 115);
    p12_2.image.animate(animationSpeed * 1.5).move(354, 115);
  });
  addAnimation('lvldco', function() {
    p12_1.image.animate(animationSpeed).opacity(0);
    p12_2.image.animate(animationSpeed).opacity(0);
    p12_3.image.animate(animationSpeed).opacity(1).after(function() {
      l1p1.image.animate(animationSpeed).opacity(1)
    });
  });
  addAnimation('lvldco', function() {
    maxSsTableSize.image.animate(animationSpeed).opacity(1);
  });
  addAnimation('lvldco', function() {
    combine(p28_1, p28_2, p28_3, {x:388,y:115},l1p1,l1p2);
  });
  addAnimation('lvldco', function() {
    maxSsTableSize.image.animate(animationSpeed).move(490, maxSsTableSize.image.y());
  });
  addAnimation('lvldco', function() {
    combine(p52_1, p52_2, p52_3, {x:490,y:115}, null, l1p3);
  });
  addAnimation('lvldco', function() {
    maxSsTableSize.image.animate(animationSpeed).move(674, maxSsTableSize.image.y());
  });
  addAnimation('lvldco', function() {
    combine(p74_1, p74_2, p74_3,
      {x:678, y:115}, null, l1p4);
  });
  addAnimation('lvldco', function() {
    combine(
      p88_1, p88_2, p88_3, {x:824,y:115},
      l1p4, l1p5);
  });
  addAnimation('lvldco', function() {
    l0p1.image.animate(animationSpeed).opacity(0);
    l0p2.image.animate(animationSpeed).opacity(0);
    maxSsTableSize.image.animate(animationSpeed).opacity(0);
  });
  addAnimation('lvldco', function() {
    maxL1Size.image.animate(animationSpeed).opacity(1);
  });
  addAnimation('lvldco', function() {
    maxSsTableSize.image.move(463, 150);
    maxSsTableSize.image.animate(animationSpeed).opacity(1);
    maxSsTableSize_2.image.animate(animationSpeed).opacity(1);
  });
  addAnimation('lvldco', function() {
    maxSsTableSize.image.animate(animationSpeed).opacity(0);
    maxSsTableSize_2.image.animate(animationSpeed).opacity(0).after(function() {
      maxL1Size.image.animate(animationSpeed).move(maxL1Size.image.x(), 150).after(function() {
        l2lbl.image.animate(animationSpeed).opacity(1);
      });
    });
  });
  addAnimation('lvldco', function() {
    p12_3.image.animate(animationSpeed).move(p12_3.image.x(), 197);
    p28_3.image.animate(animationSpeed).move(p28_3.image.x(), 197);
    l1p2.image.animate(animationSpeed).move(300, 192).after(function() {
      l2p1.image.animate(animationSpeed).opacity(1).after(function() {
        l1p2.image.opacity(0);
      });
    });
  });
  addAnimation('lvldco', function() {
    maxL1Size.image.animate(animationSpeed).move(485, maxL1Size.image.y());
  });
  addAnimation('lvldco', function() {
    p52_3.image.animate(animationSpeed).move(p52_3.image.x(), 197);
    l1p3.image.animate(animationSpeed).move(l1p3.image.x(), 192).after(function() {
      l2p2.image.animate(animationSpeed).opacity(1).after(function() {
        l1p3.image.opacity(0);
      });
    });
  });
  addAnimation('lvldco', function() {
    maxL1Size.image.animate(animationSpeed).move(300, maxL1Size.image.y());
    l1p5.image.animate(animationSpeed).move(300, l1p5.image.y());
    p74_3.image.animate(animationSpeed).move(304, p74_3.image.y());
    p88_3.image.animate(animationSpeed).move(454, p88_3.image.y());
  });
  addAnimation('lvldco', function() {
    maxL2Size.image.animate(animationSpeed).opacity(1);
  });
  addAnimation('lvldco', function() {
    maxL1Size_2.image.animate(animationSpeed).opacity(1);
  });
  addAnimation('lvldco', function() {
    maxL1Size_2.image.animate(animationSpeed).opacity(0);
    maxL2Size.image.animate(animationSpeed).opacity(0);
    maxL1Size.image.animate(animationSpeed).opacity(0);
  });
  addAnimation('lvldco', function() {
    l0p3.image.animate(animationSpeed).move(300, 25);
    p8_1.image.animate(animationSpeed).move(303, 30);
    p28_4.image.animate(animationSpeed).move(356, 30);
    p52_4.image.animate(animationSpeed).move(412, 30);
    p88_4.image.animate(animationSpeed).move(516, 30);
  });
  addAnimation('lvldco', function() {
    l0p3.image.animate(animationSpeed).move(300, 65);
    p8_1.image.animate(animationSpeed).move(303, 70);
    p28_4.image.animate(animationSpeed).move(356, 70);
    p52_4.image.animate(animationSpeed).move(412, 70);
    p88_4.image.animate(animationSpeed).move(516, 70);
    l1p5.image.animate(animationSpeed).move(595, 65);
    p74_3.image.animate(animationSpeed).move(600, 70);
    p88_3.image.animate(animationSpeed).move(750, 70);
    maxSsTableSize.image.move(300, maxSsTableSize.image.y());
    maxSsTableSize.image.animate(animationSpeed).opacity(1);
  });
//  combine(old1, old2, new, {x:824,y:115},
//    oldBack, newBack);
  addAnimation('lvldco', function() {
    combineA(p8_1, null, null, {x:305,y:115},
      null, l1p6, function() {
        combineA(p28_4, null, null, {x:358,y:115},
          l1p6, l1p7, function(){
            combine(p52_4, null, null, {x:412,y:115},
              l1p7, l1p8);
          });
      });
  });
  addAnimation('lvldco', function() {
    maxSsTableSize.image.animate(animationSpeed).move(528, 150)
  });
  addAnimation('lvldco', function() {
    combine(p74_3, null, null, {x:524,y:115},
      null, l1p9);
  });
  addAnimation('lvldco', function() {
    combineA(p88_4, p88_3, p88_5, {x:675,y:115},
      l1p9, l1p10, function() {
        l0p3.image.animate(animationSpeed).opacity(0);
        l1p5.image.animate(animationSpeed).opacity(0);
      });
  });
  addAnimation('lvldco', function() {
    maxSsTableSize.image.animate(animationSpeed).opacity(0).after(function(){
      maxSsTableSize.image.move(300, maxSsTableSize.image.y());
      maxL1Size.image.animate(animationSpeed).opacity(1);
    });
  });
  addAnimation('lvldco', function() {
    maxL1Size.image.animate(animationSpeed).opacity(0).after(function() {
      l1p8.image.animate(animationSpeed).move(l1p8.image.x(), 150);
      p8_1.image.animate(animationSpeed).move(p8_1.image.x(), 155);
      p28_4.image.animate(animationSpeed).move(p28_4.image.x(), 155);
      p52_4.image.animate(animationSpeed).move(p52_4.image.x(), 155);
      var delta = 522 - l2p1.image.x();
      l2p1.image.animate(animationSpeed).move(l2p1.image.x() + delta, 150);
      l2p2.image.animate(animationSpeed).move(l2p2.image.x() + delta, 150);
      p12_3.image.animate(animationSpeed).move(p12_3.image.x() + delta, 155);
      p28_3.image.animate(animationSpeed).move(p28_3.image.x() + delta, 155);
      p52_3.image.animate(animationSpeed).move(p52_3.image.x() + delta, 155);
    });
  });
  addAnimation('lvldco', function() {
    maxSsTableSize.image.move(300, 230);
    maxSsTableSize.image.animate(animationSpeed).opacity(1);
  });
  addAnimation('lvldco', function() {
    combine(p8_1, null, null, {x:305,y:197},
      null, l2p3);
  });
  addAnimation('lvldco', function() {
    combine(p12_3, null, null, {x:358,y:197},
      l2p3, l2p4);
  });
  addAnimation('lvldco', function() {
    combine(p28_4, p28_3, p28_5, {x:p28_5.image.x(),y:197},
      l2p4, l2p5);
  });
  addAnimation('lvldco', function() {
    maxSsTableSize.image.animate(animationSpeed).move(585, 230);
  });
  addAnimation('lvldco', function() {
    combineA(p52_4, p52_3, p52_5, {x:l2p6.image.x() + 5, y:197 }, null, l2p6, function() {
      l1p8.image.animate(animationSpeed).opacity(0);
      l2p1.image.animate(animationSpeed).opacity(0);
      l2p2.image.animate(animationSpeed).opacity(0);
    });
  });
  addAnimation('lvldco', function() {
    maxSsTableSize.image.animate(animationSpeed).opacity(0);
    maxL1Size.image.animate(animationSpeed).opacity(1);
    maxL2Size.image.animate(animationSpeed).opacity(1);
    l1p10.image.animate(animationSpeed).move(300, 110);
    p74_3.image.animate(animationSpeed).move(305, 115);
    p88_5.image.animate(animationSpeed).move(455, 115);
  });
  function moveIt(itemImage, after)
  {
    var delta = 200;
    var temp = itemImage.image.animate(animationSpeed).move(itemImage.image.x() - delta, itemImage.image.y());
    if(after)
      temp.after(after);
  }
  addAnimation('lvldco', function() {
    l0p4.image.animate(animationSpeed).move(300, 25);
    p47_1.image.animate(animationSpeed).move(p47_1.image.x(), 30);
    p52_6.image.animate(animationSpeed).move(p52_6.image.x(), 30);
    p88_6.image.animate(animationSpeed).move(p88_6.image.x(), 30).after(function() {
      l0p4.image.animate(animationSpeed).move(300, 65);
      p47_1.image.animate(animationSpeed).move(p47_1.image.x(), 70);
      p52_6.image.animate(animationSpeed).move(p52_6.image.x(), 70);
      p88_6.image.animate(animationSpeed).move(p88_6.image.x(), 70);

      l1p10.image.animate(animationSpeed).move(665, 65);
      p74_3.image.animate(animationSpeed).move(670, 70);
      p88_5.image.animate(animationSpeed).move(820, 70).after(function() {
        maxL1Size.image.animate(animationSpeed).opacity(0);
        maxL2Size.image.animate(animationSpeed).opacity(0).after(function() {
          maxSsTableSize.image.move(300, 150);
          maxSsTableSize.image.animate(animationSpeed).opacity(1);
          combineA(p47_1, null, null, {x:303,y:115},
            null, l1p11, function() {
              combineA(p52_6, null, null, {x:385,y:115},
                l1p11, l1p12, function() {
                  maxSsTableSize.image.animate(animationSpeed).move(513, 150).after(function() {
                    combineA(p74_3, null, null, {x:516,y:115},
                      null, l1p13, function() {
                        combineA(p88_6, p88_5, p88_7, {x:665,y:115},
                          l1p13, l1p14, function() {
                            l0p4.image.animate(animationSpeed).opacity(0);
                            l1p10.image.animate(animationSpeed).opacity(0);
                            maxSsTableSize.image.animate(animationSpeed).opacity(0).after(function() {
                              maxL1Size.image.animate(animationSpeed).opacity(1);
                              maxL2Size.image.animate(animationSpeed).opacity(1).after(function() {
                                // Big shift left
                                moveIt(l0lbl);
                                moveIt(l1lbl);
                                moveIt(l2lbl);
                                moveIt(maxL1Size);
                                moveIt(maxL2Size);
                                moveIt(p47_1);
                                moveIt(p52_6);
                                moveIt(p74_3);
                                moveIt(p88_7);
                                moveIt(p8_1);
                                moveIt(p12_3);
                                moveIt(p28_5);
                                moveIt(p52_5);
                                moveIt(l1p12);
                                moveIt(l1p13);
                                moveIt(l1p14);
                                moveIt(l2p6);
                                moveIt(l2p5, function() {
                                  maxL1Size.image.animate(animationSpeed).opacity(0);
                                  maxL2Size.image.animate(animationSpeed).opacity(0).after(function() {
                                    l1p12.image.animate(animationSpeed).move(385, 150);
                                    p47_1.image.animate(animationSpeed).move(388, 155);
                                    p52_6.image.animate(animationSpeed).move(470, 155);
                                    p52_5.image.animate(animationSpeed).move(600, 155);
                                    l2p6.image.animate(animationSpeed).move(595, 150).after(function() {
                                      combineA(p47_1, null, null, {x:390,y:197},
                                        null, l2p7, function() {
                                          combineA(p52_6, p52_5, p52_7, {x:472,y:197},
                                            l2p7, l2p8, function() {
                                              l1p12.image.animate(animationSpeed).opacity(0);
                                              l2p6.image.animate(animationSpeed).opacity(0);
                                              l1p14.image.animate(animationSpeed).move(100, 110);
                                              p74_3.image.animate(animationSpeed).move(105, 115);
                                              p88_7.image.animate(animationSpeed).move(255, 115).after(function() {
                                                maxL1Size.image.move(100, maxL1Size.image.y());
                                                maxL2Size.image.move(100, maxL2Size.image.y());
                                                maxL1Size.image.animate(animationSpeed).opacity(1);
                                                maxL2Size.image.animate(animationSpeed).opacity(1).after(function() {
                                                  etc.image.animate(animationSpeed).opacity(1);
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
      });
    });
  });
});

var animationSpeed = 500;
// Yep, crummy code. In a hurry. I haven't hacked something up this bad since my first programming class.

Animation.animate(function () {
  if(! registerCanvas('sztrd')) {
    return;
  }

  function particleEffect(
    particleFileName, from, to, amount,
    horizontalSourceDistance, horizontalDestinationDistance,
    delay)
  {
    if(delay == undefined)
      delay = 0;
    var particle = registerSVG('sztrd', 'images/cassandra/operations/compaction/size-tiered/' + particleFileName + '.svg', 25, 31, from.x, from.y);
    particle.image.opacity(0);
    var i = 0;
    var sourceDelta = horizontalSourceDistance / amount;
    var targetDelta = horizontalDestinationDistance / amount;
    var repeat = function()
    {
      if(i == amount)
        return;
      i++;
      particle.image.opacity(1);
      particle.image.animate(animationSpeed, '-').move(to.x + i * targetDelta, to.y).after(function() {
          particle.image.opacity(0);
          particle.image.x(from.x + i * sourceDelta);
          particle.image.y(from.y);
          repeat();
      });
    }
    setTimeout(repeat, delay);
  }

  var hdd = registerSVG('sztrd', 'images/cassandra/operations/compaction/size-tiered/hdd.svg', 1200, 530, 0, 0);
  var gap = 148;
  var base = 8;
  var mb100_0 = registerSVG('sztrd', 'images/cassandra/operations/compaction/size-tiered/100-mb.svg', 139, 60, base, -60);
  var mb100_1 = registerSVG('sztrd', 'images/cassandra/operations/compaction/size-tiered/100-mb.svg', 139, 60, base + 1 * gap, -60);
  var mb100_2 = registerSVG('sztrd', 'images/cassandra/operations/compaction/size-tiered/100-mb.svg', 139, 60, base + 2 * gap, -60);
  var mb100_3 = registerSVG('sztrd', 'images/cassandra/operations/compaction/size-tiered/100-mb.svg', 139, 60, base + 3 * gap, -60);
  var mb400_0 = registerSVG('sztrd', 'images/cassandra/operations/compaction/size-tiered/400-mb.svg', 589, 60, 8, 105);
  var mb400_1 = registerSVG('sztrd', 'images/cassandra/operations/compaction/size-tiered/400-mb.svg', 589, 60, 602, 105);
  var mb400_2 = registerSVG('sztrd', 'images/cassandra/operations/compaction/size-tiered/400-mb.svg', 589, 60, 8, 172);
  var mb400_3 = registerSVG('sztrd', 'images/cassandra/operations/compaction/size-tiered/400-mb.svg', 589, 60, 602, 172);
  var mb1600_0 = registerSVG('sztrd', 'images/cassandra/operations/compaction/size-tiered/1600-mb.svg', 1181, 137, 8, 240);
  var mb1600_1 = registerSVG('sztrd', 'images/cassandra/operations/compaction/size-tiered/1600-mb.svg', 1181, 137, 8, 385);
  var compactor = registerSVG('sztrd', 'images/cassandra/operations/compaction/size-tiered/compactor.svg', 138, 59, 750, 20);

  compactor.image.opacity(0);
  mb400_0.image.opacity(0);
  mb400_1.image.opacity(0);
  mb400_2.image.opacity(0);
  mb400_3.image.opacity(0);
  mb1600_0.image.opacity(0);
  mb1600_1.image.opacity(0);

  var theFour = [mb100_0, mb100_1, mb100_2, mb100_3];
  function dropAllFour(callback)
  {
    var i = 0;
    function go()
    {
      if(i == theFour.length)
      {
        callback();
        return;
      }
      var image = theFour[i++].image;
      image.animate(animationSpeed/2).move(image.x(), 38).after(go)
    }
    go();
  }
  function resetTheFour(callback)
  {
    compactor.image.animate(250).opacity(0);
    var i = 0;
    theFour.forEach(function(f) {
      f.image.animate(250).opacity(0).after(function(){
        f.image.y(-60);
        f.image.opacity(1);
        callback();
      });
    });
  }
  animationSpeed = 400;
  addAnimation('sztrd', function() {
    dropAllFour();
  });
  addAnimation('sztrd', function() {
    compactor.image.animate(250).opacity(1);
  });
  var numParts = 7;
  addAnimation('sztrd', function() {
    particleEffect('part-yellow', {x:10,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
    particleEffect('part-yellow', {x:139,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
    particleEffect('part-yellow', {x:304,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
    particleEffect('part-yellow', {x:452,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
    particleEffect('part-blue', {x:785,y:30}, {x:10,y:115}, numParts, 0, 560, animationSpeed);
    mb400_0.image.animate(animationSpeed * numParts).opacity(1);
  });
  addAnimation('sztrd', function() {
    resetTheFour();
  });
  addAnimation('sztrd', function() {
    dropAllFour();
  });
  addAnimation('sztrd', function() {
    compactor.image.animate(250).opacity(1).after(function(){
      particleEffect('part-yellow', {x:numParts,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
      particleEffect('part-yellow', {x:139,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
      particleEffect('part-yellow', {x:304,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
      particleEffect('part-yellow', {x:452,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
      particleEffect('part-blue', {x:785,y:30}, {x:602,y:115}, numParts, 0, 560, animationSpeed);
      mb400_1.image.animate(animationSpeed * numParts).opacity(1).after(resetTheFour);
    });
  });
  addAnimation('sztrd', function() {
    animationSpeed = 400;
    dropAllFour(function() {
      compactor.image.animate(250).opacity(1).after(function(){
        particleEffect('part-yellow', {x:numParts,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
        particleEffect('part-yellow', {x:139,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
        particleEffect('part-yellow', {x:304,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
        particleEffect('part-yellow', {x:452,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
        particleEffect('part-blue', {x:785,y:30}, {x:10,y:188}, numParts, 0, 560, animationSpeed);
        mb400_2.image.animate(animationSpeed * numParts * 1.3).opacity(1).after(function(){
          resetTheFour(function(){
            dropAllFour(function(){
              compactor.image.animate(250).opacity(1).after(function(){
                particleEffect('part-yellow', {x:numParts,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                particleEffect('part-yellow', {x:139,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                particleEffect('part-yellow', {x:304,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                particleEffect('part-yellow', {x:452,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                particleEffect('part-blue', {x:785,y:30}, {x:602,y:188}, numParts, 0, 560, animationSpeed);
                mb400_3.image.animate(animationSpeed * numParts).opacity(1).after(function() {
                  resetTheFour();
                });
              });
            });
          });
        });
      });
    });
  });
  addAnimation('sztrd', function() {
    compactor.image.animate(250).opacity(1).after(function(){
      particleEffect('part-blue', {x:10,y:120}, {x:785,y:30}, numParts, 589, 0, 0);
      particleEffect('part-blue', {x:10,y:186}, {x:785,y:30}, numParts, 589, 0, 0);
      particleEffect('part-blue', {x:620,y:120}, {x:785,y:30}, numParts, 589, 0, 0);
      particleEffect('part-blue', {x:620,y:186}, {x:785,y:30}, numParts, 589, 0, 0);
      particleEffect('part-green', {x:785,y:30}, {x:10,y:290}, numParts, 0, 1100, animationSpeed);
      mb1600_0.image.animate(animationSpeed * numParts).opacity(1);
    });
  });
  addAnimation('sztrd', function() {
    compactor.image.animate(animationSpeed).opacity(0);
    mb400_0.image.animate(animationSpeed).opacity(0);
    mb400_1.image.animate(animationSpeed).opacity(0);
    mb400_2.image.animate(animationSpeed).opacity(0);
    mb400_3.image.animate(animationSpeed).opacity(0);
  });
  addAnimation('sztrd', function() {
    // Yep, ugly, don't hate!
    animationSpeed = 100;
    dropAllFour(function(){
      compactor.image.animate(250).opacity(1).after(function(){
        particleEffect('part-yellow', {x:10,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
        particleEffect('part-yellow', {x:139,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
        particleEffect('part-yellow', {x:304,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
        particleEffect('part-yellow', {x:452,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
        particleEffect('part-blue', {x:785,y:30}, {x:10,y:115}, numParts, 0, 560, animationSpeed);
        mb400_0.image.animate(animationSpeed * numParts).opacity(1).after(function() {
          resetTheFour(function() {
            dropAllFour(function(){
              compactor.image.animate(250).opacity(1).after(function(){
                particleEffect('part-yellow', {x:numParts,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                particleEffect('part-yellow', {x:139,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                particleEffect('part-yellow', {x:304,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                particleEffect('part-yellow', {x:452,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                particleEffect('part-blue', {x:785,y:30}, {x:602,y:115}, numParts, 0, 560, animationSpeed);
                mb400_1.image.animate(animationSpeed * numParts).opacity(1).after(function() {
                      resetTheFour(function() {
                        dropAllFour(function() {
                          compactor.image.animate(250).opacity(1).after(function(){
                            particleEffect('part-yellow', {x:numParts,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                            particleEffect('part-yellow', {x:139,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                            particleEffect('part-yellow', {x:304,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                            particleEffect('part-yellow', {x:452,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                            particleEffect('part-blue', {x:785,y:30}, {x:10,y:188}, numParts, 0, 560, animationSpeed);
                            mb400_2.image.animate(animationSpeed * numParts * 1.3).opacity(1).after(function(){
                              resetTheFour(function(){
                                dropAllFour(function(){
                                  compactor.image.animate(250).opacity(1).after(function(){
                                    particleEffect('part-yellow', {x:numParts,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                                    particleEffect('part-yellow', {x:139,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                                    particleEffect('part-yellow', {x:304,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                                    particleEffect('part-yellow', {x:452,y:53}, {x:785,y:30}, numParts, 120, 0, 0);
                                    particleEffect('part-blue', {x:785,y:30}, {x:602,y:188}, numParts, 0, 560, animationSpeed);
                                    mb400_3.image.animate(animationSpeed * numParts).opacity(1).after(function() {
                                      resetTheFour(function(){
                                        compactor.image.animate(250).opacity(1).after(function(){
                                          particleEffect('part-blue', {x:10,y:120}, {x:785,y:30}, numParts, 589, 0, 0);
                                          particleEffect('part-blue', {x:10,y:186}, {x:785,y:30}, numParts, 589, 0, 0);
                                          particleEffect('part-blue', {x:620,y:120}, {x:785,y:30}, numParts, 589, 0, 0);
                                          particleEffect('part-blue', {x:620,y:186}, {x:785,y:30}, numParts, 589, 0, 0);
                                          particleEffect('part-green', {x:785,y:30}, {x:10,y:450}, numParts, 0, 1100, animationSpeed);
                                          mb1600_1.image.animate(animationSpeed * numParts).opacity(1).after(function(){
                                            resetTheFour(function(){
                                              mb400_0.image.animate().opacity(0);
                                              mb400_1.image.animate().opacity(0);
                                              mb400_2.image.animate().opacity(0);
                                              mb400_3.image.animate().opacity(0);
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
              })
          });
      });
    });
  });
});

Animation.animate(function () {
  if(! registerCanvas('wrstrcse')) {
    return;
  }

  var hdd = registerSVG('wrstrcse', 'images/cassandra/operations/compaction/size-tiered/hdd2.svg', 1200, 530, 0, 0);
  var wrstBlue_0 = registerSVG('wrstrcse', 'images/cassandra/operations/compaction/size-tiered/wrst-blue.svg', 1181, 60, 10, 7);
  var wrstBlue_1 = registerSVG('wrstrcse', 'images/cassandra/operations/compaction/size-tiered/wrst-blue.svg', 1181, 60, 10, 72);
  var wrstBlue_2 = registerSVG('wrstrcse', 'images/cassandra/operations/compaction/size-tiered/wrst-blue.svg', 1181, 60, 10, 138);
  var wrstBlue_3 = registerSVG('wrstrcse', 'images/cassandra/operations/compaction/size-tiered/wrst-blue.svg', 1181, 60, 10, 204);
  var wrstGreen = registerSVG('wrstrcse', 'images/cassandra/operations/compaction/size-tiered/wrst-green.svg', 1181, 250, 10, 270);
  wrstGreen.image.opacity(0);

  var numParts = 7;

  function particleEffect2(
    particleFileName, from, to, amount,
    horizontalSourceDistance, horizontalDestinationDistance,
    delay)
  {
    if(delay == undefined)
      delay = 0;
    var particle = registerSVG('wrstrcse', 'images/cassandra/operations/compaction/size-tiered/' + particleFileName + '.svg', 25, 31, from.x, from.y);
    particle.image.opacity(0);
    var i = 0;
    var sourceDelta = horizontalSourceDistance / amount;
    var targetDelta = horizontalDestinationDistance / amount;
    var repeat = function()
    {
      if(i == amount)
        return;
      i++;
      particle.image.opacity(1);
      particle.image.animate(animationSpeed, '-').move(to.x + i * targetDelta, to.y).after(function() {
          particle.image.opacity(0);
          particle.image.x(from.x + i * sourceDelta);
          particle.image.y(from.y);
          repeat();
      });
    }
    setTimeout(repeat, delay);
  }
  var compactor = registerSVG('wrstrcse', 'images/cassandra/operations/compaction/size-tiered/compactor.svg', 138, 59, 500, 240);
  compactor.image.opacity(0);
  animationSpeed = 400;

  addAnimation('wrstrcse', function() {
    compactor.image.animate(animationSpeed).opacity(1).after(function(){
      particleEffect2('part-blue', {x:20,y:20}, {x:550,y:255}, numParts, 1100, 0, 0);
      particleEffect2('part-blue', {x:20,y:90}, {x:550,y:255}, numParts, 1100, 0, 0);
      particleEffect2('part-blue', {x:20,y:150}, {x:550,y:255}, numParts, 1100, 0, 0);
      particleEffect2('part-blue', {x:20,y:220}, {x:550,y:255}, numParts, 1100, 0, 0);
      particleEffect2('part-green', {x:550,y:255}, {x:20,y:370}, numParts, 0, 1100, animationSpeed);
      wrstGreen.image.animate(animationSpeed * numParts).opacity(1);
    });
  });
  addAnimation('wrstrcse', function() {
    compactor.image.animate(animationSpeed).opacity(0);
    wrstBlue_0.image.animate(animationSpeed).opacity(0);
    wrstBlue_1.image.animate(animationSpeed).opacity(0);
    wrstBlue_2.image.animate(animationSpeed).opacity(0);
    wrstBlue_3.image.animate(animationSpeed).opacity(0);
  });
});

Animation.animate(function () {
  var animationSpeed = 400;
  if(! registerCanvas('rlctsi')) {
    return;
  }
  var fragmented = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/fragmented.svg', 1200, 530, 0, 0);
  var bg_0 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/bg_0.svg', 88, 471, 102, 130);
  var bg_1 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/bg_1.svg', 250, 471, 475, 130);
  var bg_2 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/bg_2.svg', 305, 471, 450, 130);
  var bg_3 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/bg_3.svg', 383, 471, 610, 130);

  var st10 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_10.svg', 16, 59, 600, -60);
  var st20 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_20.svg', 20, 59, 595, -60);
  var st40 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_40.svg', 40, 59, 580, -60);
  var st100 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_100.svg', 50, 59, 575, -60);
  var st140 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_140.svg', 75, 59, 562, -60);
  var st150 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_150.svg', 75, 59, 562, -60);
  var st175 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_175.svg', 88, 59, 555, -60);
  var st200 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_200.svg', 101, 59, 550, -60);
  var st300 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_300.svg', 151, 59, 520, -60);
  var st380 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_380.svg', 191, 59, 500, -60);
  var st490 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_500.svg', 250, 59, 470, -60);
  var st550 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_550.svg', 275, 58, 460, -60);
  var st650 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_650.svg', 326, 58, 430, -60);
  var st700 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_700.svg', 350, 58, 420, -60);
  var st1000 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_1000.svg', 251, 126, 475, -130);
  var st1100 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/st_1100.svg', 280, 120, 460, -130);

  var g0_t0 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/g0_t0.svg', 60, 28, 110, 140);
  var g1_t0 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/g1_t0.svg', 206, 28, 495, 140);
  var g1_t1 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/g1_t1.svg', 206, 28, 215, 140);
  var g1_t2 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/g1_t2.svg', 206, 28, 215, 140);
  var g1_t3 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/g1_t3.svg', 206, 28, 215, 140);
  var g2_t0 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/g2_t0.svg', 262, 28, 470, 140);
  var g2_t1 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/g2_t1.svg', 262, 28, 470, 140);
  var g2_t2 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/g2_t2.svg', 262, 28, 470, 140);
  var g2_t3 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/g2_t3.svg', 262, 28, 470, 140);
  var g3_t0 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/g3_t0.svg', 333, 28, 635, 140);
  var g3_t1 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/g3_t1.svg', 333, 28, 785, 140);
  var g3_t2 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/g3_t2.svg', 333, 28, 785, 140);
  var g3_t3 = registerSVG('rlctsi', 'images/cassandra/operations/compaction/size-tiered/g3_t3.svg', 333, 28, 785, 140);

  var all = [
    bg_0,bg_1,bg_2,bg_3,
    g0_t0,
    g1_t0,g1_t1,g1_t2,g1_t3,
    g2_t0,g2_t1,g2_t2,g2_t3,
    g3_t0,g3_t1,g3_t2,g3_t3
  ];

  all.forEach(function(im){ im.image.opacity(0); });

  addAnimation('rlctsi', function() {
    fragmented.image.animate(animationSpeed).opacity(0);
  });
  addAnimation('rlctsi', function() {
    st100.image.animate(animationSpeed).move(575, 0); // Initial drop
  });
  addAnimation('rlctsi', function() {
    bg_1.image.animate(animationSpeed).opacity(1);
  });
  addAnimation('rlctsi', function() {
    st100.image.animate(animationSpeed).move(575, 180);
  });
  addAnimation('rlctsi', function() {
    g1_t0.image.animate(animationSpeed).opacity(1);
  });
  addAnimation('rlctsi', function() {
    st1000.image.animate(animationSpeed).move(475, 0); // Initial drop
  });
  addAnimation('rlctsi', function() {
    var xTranslate = 120;
    bg_1.image.animate(animationSpeed).move(bg_1.image.x() - xTranslate, bg_1.image.y());
    g1_t0.image.animate(animationSpeed).move(g1_t0.image.x() - xTranslate, g1_t0.image.y());
    st100.image.animate(animationSpeed).move(st100.image.x() - xTranslate, st100.image.y());
    bg_3.image.animate(animationSpeed).opacity(1);
  });
  addAnimation('rlctsi', function() {
    st1000.image.animate(animationSpeed).move(670, 180);
  });
  addAnimation('rlctsi', function() {
    g3_t0.image.animate(animationSpeed).opacity(1);
  });
  addAnimation('rlctsi', function() {
    st490.image.animate(animationSpeed).move(475, 0); // Initial drop
  });
  addAnimation('rlctsi', function() {
    var xTranslate1 = 160;
    bg_1.image.animate(animationSpeed).move(bg_1.image.x() - xTranslate1, bg_1.image.y());
    g1_t0.image.animate(animationSpeed).move(g1_t0.image.x() - xTranslate1, g1_t0.image.y());
    st100.image.animate(animationSpeed).move(st100.image.x() - xTranslate1, st100.image.y());
    var xTranslate2 = 150;
    bg_3.image.animate(animationSpeed).move(bg_3.image.x() + xTranslate2, bg_3.image.y());
    g3_t0.image.animate(animationSpeed).move(g3_t0.image.x() + xTranslate2, g3_t0.image.y());
    st1000.image.animate(animationSpeed).move(st1000.image.x() + xTranslate2, st1000.image.y());
    bg_2.image.animate().opacity(1);
  });
  addAnimation('rlctsi', function() {
    st490.image.animate(animationSpeed).move(475, 180).after(function() {
      g2_t0.image.animate(animationSpeed).opacity(1);
    });
  });
  addAnimation('rlctsi', function() {
    st20.image.animate(animationSpeed).move(st20.image.x(), 0); // Initial drop
  });
  addAnimation('rlctsi', function() {
    bg_0.image.animate(animationSpeed).opacity(1);
    g0_t0.image.animate(animationSpeed).opacity(1);
  });
  addAnimation('rlctsi', function() {
    st20.image.animate(animationSpeed).move(135, 180);
  });
  addAnimation('rlctsi', function() {
    st300.image.animate(animationSpeed).move(st300.image.x(), 0); // Initial drop
  });
  addAnimation('rlctsi', function() {
    st300.image.animate(animationSpeed).move(st300.image.x(), 248);
  });
  addAnimation('rlctsi', function() {
    g2_t0.image.animate(animationSpeed).opacity(0).after(function(){
      g2_t1.image.animate(animationSpeed).opacity(1);
    });
  });
  addAnimation('rlctsi', function() {
    st140.image.animate(animationSpeed).move(st140.image.x(), 0);
  });
  addAnimation('rlctsi', function() {
    st140.image.animate(animationSpeed).move(282, 248);
  });
  addAnimation('rlctsi', function() {
    g1_t0.image.animate(animationSpeed).opacity(0).after(function() {
      g1_t1.image.animate(animationSpeed).opacity(1);
    });
  });
  addAnimation('rlctsi', function() {
    // Yep, crappy I'm in a hurry code

    st700.image.animate(animationSpeed).move(st700.image.x(), 0).after(function() {
        st700.image.animate(animationSpeed).move(775, 320).after(function(){
          g3_t0.image.animate(animationSpeed).opacity(0).after(function() {
            g3_t1.image.animate(animationSpeed).opacity(1).after(function(){
              st650.image.animate(animationSpeed).move(st650.image.x(), 0).after(function(){
                st650.image.animate(animationSpeed).move(785, 390).after(function() {
                  g3_t1.image.animate(animationSpeed).opacity(0).after(function() {
                    g3_t2.image.animate(animationSpeed).opacity(1).after(function(){
                    st40.image.animate(animationSpeed).move(st40.image.x(), 0).after(function(){
                      st40.image.animate(animationSpeed).move(122, 248).after(function(){
                        st175.image.animate(animationSpeed).move(st175.image.x(), 0).after(function(){
                          st175.image.animate(animationSpeed).move(274, 320).after(function(){
                            g1_t1.image.animate(animationSpeed).opacity(0).after(function() {
                              g1_t2.image.animate(animationSpeed).opacity(1).after(function(){
                                st150.image.animate(animationSpeed).move(st150.image.x(), 0).after(function(){
                                  st150.image.animate(animationSpeed).move(282, 390).after(function() {
                                    g1_t2.image.animate(animationSpeed).opacity(0).after(function() {
                                      g1_t3.image.animate(animationSpeed).opacity(1).after(function() {
                                        st380.image.animate(animationSpeed).move(st380.image.x(), 0).after(function() {
                                          st380.image.animate(animationSpeed).move(st380.image.x(), 320).after(function() {
                                            g2_t1.image.animate(animationSpeed).opacity(0).after(function() {
                                              g2_t2.image.animate(animationSpeed).opacity(1).after(function() {
                                                st10.image.animate(animationSpeed).move(st10.image.x(), 0).after(function(){
                                                  st10.image.animate(animationSpeed).move(135, 320).after(function() {
                                                    st550.image.animate(animationSpeed).move(st550.image.x(), 0).after(function(){
                                                      st550.image.animate(animationSpeed).move(st550.image.x(), 390).after(function() {
                                                        g2_t2.image.animate(animationSpeed).opacity(0).after(function() {
                                                          g2_t3.image.animate(animationSpeed).opacity(1).after(function() {
                                                            st1100.image.animate(animationSpeed).move(st1100.image.x(), 0).after(function() {
                                                              st1100.image.animate(animationSpeed).move(805, 460).after(function() {
                                                                g3_t2.image.animate(animationSpeed).opacity(0).after(function() {
                                                                  g3_t3.image.animate(animationSpeed).opacity(1);
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
    });
  });
});

Animation.animate(function () {
  if(! registerCanvas('unprdr')) {
    return;
  }
  var hdd = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/hdd.svg', 1200, 530, 0, 0);

  var green1 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/blank-green.svg', 1181, 137, 8, 240);

  var blue1 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/blank-blue.svg', 589, 60, 8, 105);
  var blue2 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/blank-blue.svg', 589, 60, 602, 105);
  var blue3 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/blank-blue.svg', 589, 60, 8, 172);
  var blue4 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/blank-blue.svg', 589, 60, 602, 172);

  var yellow1 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/blank-yellow.svg', 138, 59, 17, -60);
  var yellow2 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/blank-yellow.svg', 138, 59, 162, -60);
  var yellow3 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/blank-yellow.svg', 138, 59, 307, -60);
  var yellow4 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/blank-yellow.svg', 138, 59, 452, -60);

  var yellows = [yellow1, yellow2, yellow3, yellow4];
  var blues = [blue1, blue2, blue3, blue4];

  blues.forEach(function(b){b.image.opacity(0); });
  green1.image.opacity(0);

  var tx1 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-1.svg', 124, 32, 25, -60);
  var tx2 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-2.svg', 124, 32, 170, -60);
  var tx3 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-3.svg', 124, 32, 315, -60);
  var tx4 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-4.svg', 124, 32, 460, -60);
  var tx5 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-5.svg', 124, 32, 25, -60);
  var tx6 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-6.svg', 124, 32, 170, -60);
  var tx7 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-7.svg', 124, 32, 315, -60);
  var tx8 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-8.svg', 124, 32, 460, -60);
  var tx9 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-9.svg', 124, 32, 615, -60);
  var tx10 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-10.svg', 124, 32, 760, -60);
  var tx11 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-11.svg', 124, 32, 905, -60);
  var tx12 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-12.svg', 124, 32, 1045, -60);

  var tx13 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-13.svg', 124, 32, 25, -60);
  var tx14 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-14.svg', 124, 32, 170, -60);
  var tx15 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-15.svg', 124, 32, 315, -60);
  var tx16 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-16.svg', 124, 32, 460, -60);
  var tx17 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-17.svg', 124, 32, 615, -60);
  var tx18 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-18.svg', 124, 32, 760, -60);
  var tx19 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-19.svg', 124, 32, 905, -60);
  var tx20 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-20.svg', 124, 32, 1045, -60);

  var tx21 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-21.svg', 124, 32, 25, -60);
  var tx22 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-22.svg', 124, 32, 170, -60);
  var tx23 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-23.svg', 124, 32, 315, -60);
  var tx24 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-24.svg', 124, 32, 460, -60);
  var tx25 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-25.svg', 124, 32, 615, -60);
  var tx26 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-26.svg', 124, 32, 760, -60);
  var tx27 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-27.svg', 124, 32, 905, -60);
  var tx28 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-28.svg', 124, 32, 1045, -60);

  var tx29 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-29.svg', 124, 32, 25, -60);
  var tx30 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-30.svg', 124, 32, 170, -60);
  var tx31 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-31.svg', 124, 32, 315, -60);
  var tx32 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-32.svg', 124, 32, 460, -60);
  var tx33 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-33.svg', 124, 32, 615, -60);
  var tx34 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-34.svg', 124, 32, 760, -60);
  var tx35 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-35.svg', 124, 32, 905, -60);
  var tx36 = registerSVG('unprdr', 'images/cassandra/operations/compaction/size-tiered/tx-36.svg', 124, 32, 1045, -60);

  var group1 = [tx1, tx2, tx3, tx4];
  var group2 = [tx5, tx6, tx7, tx8];
  var group3 = [tx9, tx10, tx11, tx12];
  var group4 = [tx13, tx14, tx15, tx16];

  var group5 = [tx1, tx2, tx3, tx4, tx5, tx6, tx7, tx8, tx9, tx10, tx11, tx12, tx13, tx14, tx15, tx16];
  var group6 = [tx17, tx18, tx19, tx20];
  var group7 = [tx21, tx22, tx23, tx24];
  var group8 = [tx25, tx26, tx27, tx28];
  var group9 = [tx29, tx30, tx31, tx32];
  var group10 = [tx33, tx34, tx35, tx36];
  var groups = [group2, group3, group4, group6, group7, group8, group9, group10];

  var xBases = [17, 162, 307, 452];

  var anchors = [
      // b = background image, d = data 8
      { b: {x: 16, y: 105 }, d: {x: 25, y: 118}},
      { b: {x: 610, y: 105 }, d: {x: 615, y: 118 }},
      { b: {x: 16, y: 172 }, d: {x: 25, y: 185 }},
      { b: {x: 610, y: 172 }, d: {x: 615, y: 185 }},
//67 y delta
      { b: {x: 16, y: 240 }, d: {x: 25, y: 256}},
      { b: {x: 610, y: 240 }, d: {x: 615, y: 256}},
      { b: {x: 16, y: 307 }, d: {x: 25, y: 323}},
      { b: {x: 610, y: 307 }, d: {x: 615, y: 323}},
  ];

  var theFour = yellows;
  function resetTheFour(callback)
  {
    var i = 0;
    theFour.forEach(function(f) {
      f.image.y(-60);
      f.image.x(xBases[i++]);
      f.image.opacity(1);
    });
  }

  function dropAllFour(callback)
  {
    resetTheFour();
    var i = 0;
    function go()
    {
      if(i == theFour.length)
      {
        callback();
        return;
      }
      var image = theFour[i++].image;
      image.animate(animationSpeed/2).move(image.x(), 35).after(go)
    }
    go();
  }
  function dropDatums(datums)
  {
    var i = 0;
    function go()
    {
      var image = datums[i++].image;
      image.animate(animationSpeed/2).move(image.x(), 47).after(go)
    }
    go();
  }

  function moveGroupToAnchor(
    dataImages, backgroundImages,
    targetAnchor, newBackgroundImage,
    callback)
  {
    var xDataDelta = targetAnchor.d.x - dataImages[0].image.x();
    var yDataDelta = targetAnchor.d.y - dataImages[0].image.y();
    var xBackgroundDelta = targetAnchor.b.x - backgroundImages[0].image.x();
    var yBackgroundDelta = targetAnchor.b.y - backgroundImages[0].image.y();
    for(var i =0; i < dataImages.length; i++)
    {
      var d = dataImages[i].image;
      var temp = d.animate(animationSpeed).move(d.x() + xDataDelta, d.y() + yDataDelta);

      if(i < backgroundImages.length)
      {
        var b = backgroundImages[i].image;
        b.animate(animationSpeed).move(b.x() + xBackgroundDelta, b.y() + yBackgroundDelta);
      }
      if(i == 3)
        temp.after(function(d) {
          if(newBackgroundImage)
            newBackgroundImage.image.animate().opacity(1);
          for(var j =0; j < 4; j++)
          {
            var bb = backgroundImages[j];
            var t = bb.image.animate(animationSpeed).opacity(0);
            if(j == 3 && callback)
              t.after(callback);
          }
        });
    }
  }
  addAnimation('unprdr', function() {
    groups.forEach(function(g){
      var i = 0;
      g.forEach(function(d){
        d.image.x(xBases[i++] + 8);
      });
    });
    dropAllFour();
    dropDatums(group1);
  });
  addAnimation('unprdr', function() {
    moveGroupToAnchor(group1, yellows, anchors[0], blue1);
  });
  addAnimation('unprdr', function() {
    dropAllFour();
    dropDatums(group2);
  });

  addAnimation('unprdr', function() {
    moveGroupToAnchor(group2, yellows, anchors[1], blue2);
  });
  addAnimation('unprdr', function() {


    dropDatums(group3);
    dropAllFour(function(){
      moveGroupToAnchor(group3, yellows, anchors[2], blue3, function() {
        dropDatums(group4);
        dropAllFour(function() {
          moveGroupToAnchor(group4, yellows, anchors[3], blue4, function() {
            moveGroupToAnchor(group5, blues, anchors[4], green1, function() {
              // Reset blues
              blue1.image.move(8, 105);
              blue2.image.move(602, 105);
              blue3.image.move(8, 172);
              blue4.image.move(602, 172);
              dropDatums(group6);
              dropAllFour(function() {
                moveGroupToAnchor(group6, yellows, anchors[0], blue1, function() {
                  dropDatums(group7);
                  dropAllFour(function() {
                    moveGroupToAnchor(group7, yellows, anchors[1], blue2, function(){
                      dropDatums(group8);
                      dropAllFour(function() {
                        moveGroupToAnchor(group8, yellows, anchors[2], blue3, function() {
                          dropDatums(group9);
                          dropAllFour(function() {
                            moveGroupToAnchor(group9, yellows, anchors[3], blue4, function() {
                              dropDatums(group10);
                              dropAllFour();
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

Animation.animate(function () {
  if(! registerCanvas('stldat')) {
    return;
  }
  var staleData = registerSVG('stldat', 'images/cassandra/operations/compaction/size-tiered/stale-records.svg', 1200, 530, 0, 0);
});

// finally had time to write some elegant code!
var animationSpeed = 123;
var base = 0; // x position, left side of size tiered compaction
var pCount = 0; // Number of partitions dropped to level 1 in tier 1
var maxP = 0; // Max partitions dropped to tier 1 in size tiered
var leftScrollStoppingPoint = 0;
var leftScrollSpeed = 3;

Animation.animate(function () {
  if(! registerCanvas('twcsan'))
  {
     return;
  }
  var delta = 125;
  var sep1 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/sep-1.svg', 49, 260, 1200, 25);
  var sep2 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/sep-2.svg', 49, 260, sep1.image.x() + delta, 25);
  var sep3 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/sep-3.svg', 49, 260, sep2.image.x() + delta, 25);
  var sep4 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/sep-4.svg', 49, 260, sep3.image.x() + delta, 25);
  var sep5 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/sep-5.svg', 49, 260, sep4.image.x() + delta, 25);
  var sep6 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/sep-6.svg', 49, 260, sep5.image.x() + delta, 25);
  var sep7 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/sep-7.svg', 49, 260, sep6.image.x() + delta, 25);
  var sep8 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/sep-8.svg', 57, 260, sep7.image.x() + delta, 25);
  var sep9 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/sep-9.svg', 57, 260, sep8.image.x() + delta, 25);
  var sep10 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/sep-10.svg', 57, 260, sep9.image.x() + delta, 25);

  var p1 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/p1.svg', 84, 17, 1234, 45);
  var p2 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/p2.svg', 112, 30, p1.image.x() + delta, 45);
  var p3 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/p3.svg', 112, 49, p2.image.x() + delta, 45);
  var p4 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/p4.svg', 112, 68, p3.image.x() + delta, 45);
  var p5 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/p5.svg', 112, 118, p4.image.x() + delta, 45);
  var p6 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/p6.svg', 112, 154, p5.image.x() + delta, 45);
  var p7 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/p7.svg', 112, 103, p6.image.x() + delta, 45);
  var p8 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/p8.svg', 112, 60, p7.image.x() + delta, 45);
  var p9 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/p9.svg', 112, 34, p8.image.x() + delta, 45);

  var all_p = [p1,p2,p3,p4,p5,p6,p7,p8,p9];
  all_p.forEach(function(a){a.image.opacity(0); });

  var t1_1 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/t1.svg', 28, 17, 0, -1000);
  var t1_2 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/t1.svg', 28, 17, 0, -1000);
  var t1_3 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/t1.svg', 28, 17, 0, -1000);
  var t1_4 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/t1.svg', 28, 17, 0, -1000);

  var t2_1 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/t2.svg', 112, 17, 0, -1000);
  var t2_2 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/t2.svg', 112, 17, 0, -1000);
  var t2_3 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/t2.svg', 112, 17, 0, -1000);
  var t2_4 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/t2.svg', 112, 17, 0, -1000);

  var t3_1 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/t3.svg', 112, 68, -1000, -1000);
  var t3_2 = registerSVG('twcsan', 'images/cassandra/operations/compaction/time-window/t3.svg', 112, 68, -1000, -1000);

  var all_t = [t1_1,t1_2,t1_3,t1_4,t2_1,t2_2,t2_3,t2_4,t3_1,t3_2];
  var all_seps = [sep1, sep2, sep3, sep4, sep5, sep6, sep7, sep8, sep9, sep10];
  all_seps.forEach(function(s){s.image.opacity(0);});

  function updateBase()
  {
    if(base < leftScrollStoppingPoint)
      return;
    base -= leftScrollSpeed;
    all.forEach(function(a){ a.image.translate(base, 0); });
    all_t.forEach(function(a){ a.image.translate(base, 0); });
    setTimeout(updateBase, 1000 / 60);
  }

  var all = [sep1, sep2, sep3, sep4, sep5, sep6, sep7, sep8, sep9, sep10,
            p1,p2,p3,p4,p5,p6,p7,p8,p9];

  function dropAllFour(b, callAfterFunction, finallCallback)
  {
    var w = t1_1.image.width();
    t1_1.image.move(b, -17);
    t1_2.image.move(b + w, -17);
    t1_3.image.move(b + 2 * w, -17);
    t1_4.image.move(b + 3 * w, -17);
    t1_1.image.opacity(1);
    t1_2.image.opacity(1);
    t1_3.image.opacity(1);
    t1_4.image.opacity(1);
    t1_1.image.animate(animationSpeed).move(b, 45).after(function() {
      if(++pCount == maxP) { finallCallback(); return; }
      t1_2.image.animate(animationSpeed).move(b + w, 45).after(function() {
        if(++pCount == maxP) { finallCallback(); return; }
        t1_3.image.animate(animationSpeed).move(b + 2 * w, 45).after(function() {
          if(++pCount == maxP) { finallCallback(); return; }
          t1_4.image.animate(animationSpeed).move(b + 3 * w, 45).after(function() {
            if(++pCount == maxP) { finallCallback(); return; }
            callAfterFunction();
          });
        });
      });
    });
  }
  function fadeFour(b, y, newPartition, afterFunc)
  {
    var w = t1_1.image.width();
    t1_1.image.animate(animationSpeed).move(b, y);
    t1_2.image.animate(animationSpeed).move(b + w, y);
    t1_3.image.animate(animationSpeed).move(b + 2 * w, y);
    t1_4.image.animate(animationSpeed).move(b + 3 * w, y).after(function() {
      t1_1.image.animate(animationSpeed).opacity(0);
      t1_2.image.animate(animationSpeed).opacity(0);
      t1_3.image.animate(animationSpeed).opacity(0);
      t1_4.image.animate(animationSpeed).opacity(0);
      newPartition.image.opacity(0);
      newPartition.image.move(t1_1.image.x(), t1_1.image.y());
      newPartition.image.animate(animationSpeed).opacity(1).after(afterFunc);
    });
  }
  function compactT1toT2(b, after, finallCallback)
  {
    dropAllFour(b, function() {
      fadeFour(b, 65, t2_1, function() {
        dropAllFour(b, function() {
          fadeFour(b, 84, t2_2, function() {
            dropAllFour(b, function() {
              fadeFour(b, 103, t2_3, function() {
                dropAllFour(b, function() {
                  fadeFour(b, 122, t2_4, after);
                }, finallCallback);
              });
            }, finallCallback);
          });
        }, finallCallback);
      });
    }, finallCallback);
  }
  function compactT2toT3(b, top, newPartition, after)
  {
    var delta = 19;
    t2_1.image.animate(animationSpeed).move(b, top);
    t2_2.image.animate(animationSpeed).move(b, top + delta);
    t2_3.image.animate(animationSpeed).move(b, top + 2 * delta);
    t2_4.image.animate(animationSpeed).move(b, top + 3 * delta).after(function() {
      newPartition.image.opacity(0);
      newPartition.image.move(t2_1.image.x(), t2_1.image.y());
      t2_1.image.animate(animationSpeed).opacity(0);
      t2_2.image.animate(animationSpeed).opacity(0);
      t2_3.image.animate(animationSpeed).opacity(0);
      t2_4.image.animate(animationSpeed).opacity(0);
      newPartition.image.animate(animationSpeed).opacity(1).after(after);
    });
  }
  function compactEm(b, finallCallback)
  {
    //65 = y
    // t2_1
    compactT1toT2(b, function() {
      compactT2toT3(b, 141, t3_1, function() {
        compactT1toT2(b, function() {
          compactT2toT3(b, 212, t3_2, function() {
            compactT1toT2(b, function() {

            }, finallCallback);
          });
        }, finallCallback);
      });
    }, finallCallback);
  }
  function showFullFinalPartition(finalPartition, repeatFunc)
  {
    if(finalPartition)
    {
      all_t.forEach(function(a) {
        a.image.animate(animationSpeed).opacity(0);
      });
      finalPartition.image.opacity(0);
      finalPartition.image.move(t1_1.image.x(), t1_1.image.y());
      finalPartition.image.animate(animationSpeed).opacity(1).after(repeatFunc);
    }
  }
  function doFullCompaction(b, maxLevel1Drops, t3FinalBaseY, finalPartition, repeatFunc)
  {
    pCount = 0;
    maxP = maxLevel1Drops;
    compactEm(b, function() {
      t3_1.image.animate(animationSpeed).move(t3_1.image.x(), t3FinalBaseY);
      t3_2.image.animate(animationSpeed).move(t3_2.image.x(), t3FinalBaseY + 71).after(function() {
        showFullFinalPartition(finalPartition, repeatFunc);
      });
    });
  }

  animationSpeed = 50;
  var delta = 125;
  var b = 1234;

  addAnimation('twcsan', function() {
    leftScrollStoppingPoint = -242;
    sep1.image.opacity(1);
    updateBase();
  });
  addAnimation('twcsan', function() {
    animationSpeed = 300;
    doFullCompaction(b, 3, -1, null);
  });
  addAnimation('twcsan', function() {
    sep2.image.animate(animationSpeed).opacity(1).after(function(){
      showFullFinalPartition(p1);
    });
  });
  addAnimation('twcsan', function() {
    leftScrollStoppingPoint = -360;
    updateBase();
  });
  addAnimation('twcsan', function() {
    doFullCompaction(b += delta, 6, -1, null);
  });
  addAnimation('twcsan', function() {
    sep3.image.animate(animationSpeed).opacity(1).after(function() {
      showFullFinalPartition(p2);
    });
  });
  addAnimation('twcsan', function() {
    leftScrollStoppingPoint = -480;
    updateBase();
  });
  addAnimation('twcsan', function() {
    animationSpeed = 250;
    doFullCompaction(b += delta, 10, -1, null);
  });
  addAnimation('twcsan', function() {
    sep4.image.animate(animationSpeed).opacity(1).after(function() {
      showFullFinalPartition(p3);
    });
  });
  addAnimation('twcsan', function() {
    leftScrollStoppingPoint = -600;
    updateBase();
  });
  addAnimation('twcsan', function() {
    leftScrollStoppingPoint = -1190;
    leftScrollSpeed = 1;
    updateBase();
    animationSpeed = 75;
    doFullCompaction(b += delta, 15, -1, p4, function() {
      sep5.image.animate(animationSpeed).opacity(1);
      animationSpeed = 37;
      doFullCompaction(b += delta, 26, 104, p5, function() {
        sep6.image.animate(animationSpeed).opacity(1);
        animationSpeed = 40;
        doFullCompaction(b += delta, 24, 65, p6, function() {
          sep7.image.animate(animationSpeed).opacity(1);
          animationSpeed = 55;
          doFullCompaction(b += delta, 23, 85, p7, function() {
            sep8.image.animate(animationSpeed).opacity(1);
            animationSpeed = 100;
            doFullCompaction(b += delta, 13, -1, p8, function() {
              sep9.image.animate(animationSpeed).opacity(1);
              animationSpeed = 100;
              doFullCompaction(b += delta, 7, 85, p9, function() {
                sep10.image.animate(animationSpeed).opacity(1);
              });
            });
          });
        });
      });
    });
  });
});


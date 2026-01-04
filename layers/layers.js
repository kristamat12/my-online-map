var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 0.624000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_S2RGB_69010300000000000000013568_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "S2RGB_690103-0000000000-0000013568",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/S2RGB_69010300000000000000013568_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11427423.799298, 1465209.826965, 11446464.804159, 1590091.240721]
                            })
                        });
var lyr_S2RGB_69010300000000000000000000_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "S2RGB_690103-0000000000-0000000000",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/S2RGB_69010300000000000000000000_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11288308.981852, 1465463.220301, 11429287.141260, 1591918.730442]
                            })
                        });
var format_690102_ZonalStat_3 = new ol.format.GeoJSON();
var features_690102_ZonalStat_3 = format_690102_ZonalStat_3.readFeatures(json_690102_ZonalStat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_690102_ZonalStat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_690102_ZonalStat_3.addFeatures(features_690102_ZonalStat_3);
var lyr_690102_ZonalStat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_690102_ZonalStat_3, 
                style: style_690102_ZonalStat_3,
                popuplayertitle: "690102-อ้อยลอย_ZonalStat",
                interactive: true,
                title: '<img src="styles/legend/690102_ZonalStat_3.png" /> 690102-อ้อยลอย_ZonalStat'
            });
var format_690102Pcut_4 = new ol.format.GeoJSON();
var features_690102Pcut_4 = format_690102Pcut_4.readFeatures(json_690102Pcut_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_690102Pcut_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_690102Pcut_4.addFeatures(features_690102Pcut_4);
var lyr_690102Pcut_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_690102Pcut_4, 
                style: style_690102Pcut_4,
                popuplayertitle: "690102-Pcut",
                interactive: true,
                title: '<img src="styles/legend/690102Pcut_4.png" /> 690102-Pcut'
            });
var format_690102Fcut_5 = new ol.format.GeoJSON();
var features_690102Fcut_5 = format_690102Fcut_5.readFeatures(json_690102Fcut_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_690102Fcut_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_690102Fcut_5.addFeatures(features_690102Fcut_5);
var lyr_690102Fcut_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_690102Fcut_5, 
                style: style_690102Fcut_5,
                popuplayertitle: "690102-Fcut",
                interactive: true,
                title: '<img src="styles/legend/690102Fcut_5.png" /> 690102-Fcut'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_S2RGB_69010300000000000000013568_1.setVisible(true);lyr_S2RGB_69010300000000000000000000_2.setVisible(true);lyr_690102_ZonalStat_3.setVisible(true);lyr_690102Pcut_4.setVisible(true);lyr_690102Fcut_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_S2RGB_69010300000000000000013568_1,lyr_S2RGB_69010300000000000000000000_2,lyr_690102_ZonalStat_3,lyr_690102Pcut_4,lyr_690102Fcut_5];
lyr_690102_ZonalStat_3.set('fieldAliases', {'CaneYearNa': 'CaneYearNa', 'ZoneName': 'ZoneName', 'Responsibl': 'Responsibl', 'FarmerId': 'FarmerId', 'PrefixName': 'PrefixName', 'Firstname': 'Firstname', 'Lastname': 'Lastname', 'PlantCode': 'PlantCode', 'AreaGPS': 'AreaGPS', 'ตร��': 'ตร��', 'layer': 'layer', 'path': 'path', 'NDVI_mean': 'NDVI_mean', 'WI_mean': 'WI_mean', 'AUTO': 'AUTO', });
lyr_690102Pcut_4.set('fieldAliases', {'PlantCode': 'PlantCode', });
lyr_690102Fcut_5.set('fieldAliases', {'PlantCode': 'PlantCode', });
lyr_690102_ZonalStat_3.set('fieldImages', {'CaneYearNa': 'TextEdit', 'ZoneName': 'TextEdit', 'Responsibl': 'TextEdit', 'FarmerId': 'TextEdit', 'PrefixName': 'TextEdit', 'Firstname': 'TextEdit', 'Lastname': 'TextEdit', 'PlantCode': 'TextEdit', 'AreaGPS': 'TextEdit', 'ตร��': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'NDVI_mean': 'TextEdit', 'WI_mean': 'TextEdit', 'AUTO': 'TextEdit', });
lyr_690102Pcut_4.set('fieldImages', {'PlantCode': 'TextEdit', });
lyr_690102Fcut_5.set('fieldImages', {'PlantCode': 'TextEdit', });
lyr_690102_ZonalStat_3.set('fieldLabels', {'CaneYearNa': 'no label', 'ZoneName': 'no label', 'Responsibl': 'no label', 'FarmerId': 'no label', 'PrefixName': 'no label', 'Firstname': 'no label', 'Lastname': 'no label', 'PlantCode': 'no label', 'AreaGPS': 'no label', 'ตร��': 'no label', 'layer': 'no label', 'path': 'no label', 'NDVI_mean': 'no label', 'WI_mean': 'no label', 'AUTO': 'no label', });
lyr_690102Pcut_4.set('fieldLabels', {'PlantCode': 'no label', });
lyr_690102Fcut_5.set('fieldLabels', {'PlantCode': 'no label', });
lyr_690102Fcut_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
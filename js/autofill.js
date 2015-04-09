$('#auto-fill').change(function () {
    if ($(this).attr("checked")) {
        //do the stuff that you would do when 'checked'
        
        document.getElementByName('_fid_26').value = document.getElementByName('_fid_6').value;
        document.getElementByName('_fid_113').value = document.getElementByName('_fid_44').value;
        document.getElementByName('_fid_114').value = document.getElementByName('_fid_45').value;
        document.getElementByName('_fid_115').value = document.getElementByName('_fid_46').value;
        document.getElementByName('_fid_116').value = document.getElementByName('_fid_47').value;
        document.getElementByName('_fid_117').value = document.getElementByName('_fid_48').value;
        document.getElementByName('_fid_118').value = document.getElementByName('_fid_49').value;
        document.getElementByName('_fid_27').value = document.getElementByName('_fid_58').value;
        document.getElementByName('_fid_28').value = document.getElementByName('_fid_61').value;
    } else {
    //Here do the stuff you want to do when 'unchecked'
    
        document.getElementByName('_fid_26').value = '';
        document.getElementByName('_fid_113').value = '';
        document.getElementByName('_fid_114').value = '';
        document.getElementByName('_fid_115').value = '';
        document.getElementByName('_fid_116').value = '';
        document.getElementByName('_fid_117').value = '';
        document.getElementByName('_fid_118').value = '';
        document.getElementByName('_fid_27').value = '';
        document.getElementByName('_fid_28').value = '';
    }
});
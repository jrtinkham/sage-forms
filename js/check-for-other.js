function CheckForOther (item, origlen)
    {
    var sitem = item.options[item.selectedIndex];

    if (item.selectedIndex == (item.length - 1))
        {
        var val = prompt ("ADD A NEW CHOICE:", "");

        if (val == null)
            item.selectedIndex = 0;
        else	
            {
            var slen = item.length;

            if (slen == origlen+1){
                item.options[slen] = new Option (sitem.text, sitem.value);
                }

            item.options[item.length-2].text = val;
            item.options[item.length-2].value = val;
            item.selectedIndex = item.length-2;
            }
        }
    }
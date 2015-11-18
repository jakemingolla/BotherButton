rm *.zip
now=$(date | sed -e 's/\ /./g')
zip -r $now.zip *

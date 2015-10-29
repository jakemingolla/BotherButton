rm *.zip
rm *.pyc
now=$(date | sed -e 's/\ /./g')
zip -r $now.zip *

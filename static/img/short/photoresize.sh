cd ./
	for PHOTO in *.jpg
		do
			printf "Resize $PHOTO\n"
			convert "$PHOTO" -resize 100x "$PHOTO"
		done

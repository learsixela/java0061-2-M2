
git config --global user.name "Israel Palma" 
git config --global user.email "ipalm001@gmail.com"

//
echo "# java0061-2-M2" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/learsixela/java0061-2-M2.git
git push -u origin main
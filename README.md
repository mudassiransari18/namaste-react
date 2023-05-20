# Namaster react

1. Inception    
    1. document.createElement(tagName) --> using js
    2. Append everything in <div id= "root"></div>
    3. Use CDN links to use React and React DOM
    4. Use React.createElement(tagName, attribute object, children)
    5. Use React.createRoot(document.getElementById)

2. Igniting our app
    1. git init.
    2. Make master branch as main branch since github supports that. (Use git branch -M main)
    3. Create a new github repo
    4. git remote add origin https://github.com/mudassiransari18/namaste-react.git
    5. Push everything to github.
    6. npm init ---  and Package.json (configuration for npm) and package-lock.json(Keeping record of exact version)
    7. Dev dependency and Dependency.  Also (^ for minor upgrade and ~ for major upgrade)
    8. Use Parcel as bundler
    9. npm for installing and npx for executing.
    10. Browser script cannot have import and export. (Use type="module" in script tag since import/export are modules and not plain js code.)

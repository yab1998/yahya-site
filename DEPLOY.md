# Deploying yahyaabdulbasser.me

## 1. Run it locally (5 min)
1. Install Node 22 (nodejs.org, LTS installer).
2. Unzip the project, open Terminal in the `astro` folder.
3. `npm install`
4. `npm run dev` -> open http://localhost:4321

## 2. Put it on GitHub (10 min)
1. github.com -> New repository -> name `yahyaabdulbasser.me` -> Private is fine -> Create.
2. In Terminal, inside the project folder:
       git init
       git add .
       git commit -m "v2"
       git branch -M main
       git remote add origin https://github.com/<your-username>/yahyaabdulbasser.me.git
       git push -u origin main
   (or drag the folder into GitHub Desktop and Publish)

## 3. Connect Netlify (5 min)
1. app.netlify.com -> sign up with GitHub.
2. Add new site -> Import an existing project -> GitHub -> pick the repo.
3. Netlify reads netlify.toml (build `npm run build`, publish `dist`). Click Deploy.
4. You get a free URL like `yahya-abdul-basser.netlify.app`. Rename it under Site configuration -> Change site name.
   Every `git push` from now on redeploys automatically.

## 4. Check before sharing
- Open the netlify.app link on your phone (cellular, not wifi).
- Paste the link into iMessage / LinkedIn: a preview card should show.
- Chrome -> DevTools -> Lighthouse -> Mobile -> run. Aim for 95+.

## 5. Domain (after renewing at GoDaddy)
1. GoDaddy -> My Products -> yahyaabdulbasser.me -> Renew (expired Oct 3; renew within the grace period).
2. Netlify -> Domain management -> Add a domain -> `yahyaabdulbasser.me` -> Verify.
3. Netlify shows DNS records. In GoDaddy -> DNS -> Manage:
   - Edit the `A` record for `@` -> Netlify's load balancer IP (shown in Netlify, currently 75.2.60.5)
   - Edit/add `CNAME` for `www` -> `<your-site>.netlify.app`
   - Do NOT touch MX records (email).
4. Wait 10 min to a few hours. Netlify -> HTTPS -> Verify DNS / Provision certificate.
5. Set `yahyaabdulbasser.me` as the primary domain.

## 6. Optional
- Netlify Analytics (paid) or Plausible for visitor stats.
- Lunar Lighthouse: if you buy lunarlighthouse.(com|studio), point it at Netlify and add a redirect to /studio.

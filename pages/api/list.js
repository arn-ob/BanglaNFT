// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"

export default async function handler(req, res) {
    let data = await axios.post("http://localhost:3300/list")
    res.status(200).json(data.data)
  }
  
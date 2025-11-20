let playlists = []

module.exports = {


    // GET/playlists

    index: (req, res) => {
        res.json(playlists)
    },



    // GET/playlists/:id

    show: (req, res) => {
        const { id } = req.params
        const playlist = playlists.find(pl => pl.id === +id)

        if (!playlist) {
            return res.status(404).json({ message: 'PlayList não encontrada' })
        }

        res.json(playlist)

    },


    //POST/ playlists

    save: (req, res) => {
        const { name, tags, musics } = req.body


        if (typeof name !== 'string') {
            return res.status(400).json({ message: 'O nome da playList deve ser uma string' })
        }

        if (!Array.isArray(tags)) {
            return res.status(400).json({ message: 'As tags devem ser um array' })
        }


        const generateId = () => {
            const newId = playlists.length + 1

            while (playlists.some(item => item.id === newId)) {
                newId++;
            }

            return newId;

        }

        const newPlaylist = {

            id: generateId(),
            name: name,
            tags: tags,
            musics: musics ?? []
        }

        playlists.push(newPlaylist)

        res.status(201).json(newPlaylist)
    },


    //PUT/ playlists/:id

    update: (req, res) => {
        const { id } = req.params
        const { name, tags } = req.body

        const playlistIndex = playlists.findIndex(pl => pl.id === +id)

        if (playlistIndex === -1) {
            return res.status(404).json({ message: 'playlist not found' })
        }

        if (typeof name === 'string') {
            playlists[playlistIndex].name = name
        }
        if (tags && Array.isArray(tags)) {
            playlists[playlistIndex].tags = tags
        }

        res.json(playlists[playlistIndex])
    },



    // DELETE/ playlists/:id

    delete: (req, res) => {
        const { id } = req.params

        const playlistIndex = playlists.findIndex(pl => pl.id === +id)

        if (playlistIndex === -1) {
            return res.status(404).json({ message: 'playlist not found' })
        }

        const deletedPlaylist = playlists.splice(playlistIndex, 1)

        res.json(deletedPlaylist)
    },


}




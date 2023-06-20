<script>
  import { defaultFormDate, defaultFormTime } from "$lib/util";

  export let data = null;
  let km = { awal: 232, akhir: 232 };
  $: km.pemakaian = km?.akhir - km?.awal;
</script>

<input type="hidden" name="collection" value="pemakaian" />
<section>
  {#if data}
    <div>
      <label for="no_spj">No SPJ</label>
      <input
        type="text"
        name="no_spj"
        id="no_spj"
        value={data?.["no_spj"] ?? ""}
      />
    </div>
  {/if}

  <div>
    <label for="sopir">Sopir</label>
    <select name="sopir" id="sopir" value={data?.["sopir"] ?? "1"}>
      <option value="1">Santoso</option>
    </select>
  </div>

  <div>
    <label for="tujuan">Tujuan</label>
    <input
      type="text"
      name="tujuan"
      id="tujuan"
      value={data?.["tujuan"] ?? ""}
    />
  </div>

  <div>
    <label for="keperluan">Keperluan</label>
    <input
      type="text"
      name="keperluan"
      id="keperluan"
      value={data?.["keperluan"] ?? ""}
    />
  </div>

  <div>
    <label for="">Berangkat</label>
    <div class="row">
      <div>
        <label for="tanggal_berangkat">Tanggal</label>
        <input
          type="date"
          name="tanggal_berangkat"
          id="tanggal_berangkat"
          value={defaultFormDate(data?.["tanggal_berangkat"]) ?? ""}
        />
      </div>
      <div>
        <label for="jam_berangkat">Jam</label>
        <input
          type="time"
          name="jam_berangkat"
          id="jam_berangkat"
          value={defaultFormTime(data?.["jam_berangkat"]) ?? ""}
        />
      </div>
    </div>
  </div>

  <div>
    <label for="">Kembali</label>
    <div class="row">
      <div>
        <label for="tanggal_kembali">Tanggal</label>
        <input
          type="date"
          name="tanggal_kembali"
          id="tanggal_kembali"
          value={defaultFormDate(data?.["tanggal_berangkat"]) ?? ""}
          min={defaultFormDate(data?.["tanggal_berangkat"])}
        />
      </div>
      <div>
        <label for="jam_kembali">Jam</label>
        <input
          type="time"
          name="jam_kembali"
          id="jam_kembali"
          value={defaultFormTime(data?.["jam_berangkat"]) ?? ""}
        />
      </div>
    </div>
  </div>

  <div>
    <label for="">Kilometer</label>
    <div class="row">
      <div>
        <label for="km_awal">Awal</label>
        <input
          type="number"
          name="km_awal"
          id="km_awal"
          bind:value={km["awal"]}
        />
      </div>
      <div>
        <label for="km_akhir">Akhir</label>
        <input
          type="number"
          name="km_akhir"
          id="km_akhir"
          bind:value={km["akhir"]}
        />
      </div>
    </div>
  </div>

  <div>
    <label for="km_pemakaian">Pemakaian</label>
    <input
      type="number"
      name="km_pemakaian"
      id="km_pemakaian"
      bind:value={km["pemakaian"]}
      readonly
    />
  </div>

  <div class="row action">
    <button type="submit">Tambah</button>
    <a href="./" role="button">Batal</a>
  </div>
</section>

<style>
  * {
    /* border: 1px solid pink; */
  }

  section > * {
    padding: 0.5rem 0;
    /* border: 1px solid blue; */
  }

  section label {
    color: var(--bg-5);
    font-size: 0.95em;
    display: block;
  }

  .row.action > * {
    margin: 0;
    width: 100%;
    height: 2.5rem;
  }
</style>

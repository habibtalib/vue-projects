<template>
  <div>
    <b-row align-h="between" class="border border-top-0
                                    border-left-0
                                    border-right-0
                                    mt-4">
      <b-col md="8">
        <h1 class="display-4">
          {{title}}
        </h1>
      </b-col>
      <b-col md="4">
        <b-button class="float-right my-3" router-link :to="{ name: 'Products' }" variant="danger">
          Cancel
        </b-button>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col md="3" class="text-center mb-4">
        <p>Product ID</p>
        <h1>XT-001</h1>
        <img class="mx-auto d-block" src="../../../assets/barcode.png" fluid-grow alt="Product Barcode" />
      </b-col>
      <b-col class="ml-4">
        <b-form @submit="onSubmit">
          <b-row>
            <b-col md="9">
              <b-form-group id="product-name-grp"
                            label="Product Name:"
                            label-for="product-name">
                <b-form-input id="product-name"
                              type="text"
                              v-model="form.name"
                              required
                              placeholder="Product Name">
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group id="product-price-grp"
                            label="Price:"
                            label-for="product-price">
                <b-form-input id="product-price"
                              type="number" step=".01"
                              v-model="form.price"
                              required placeholder="Price">
                </b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-group id="product-manufacturer-grp"
                        label="Manufacturer:"
                        label-for="product-manufacturer">
            <b-form-select id="product-manufacturer"
                           :options="manufacturers"
                           required
                           v-model="form.manufacturer">
            </b-form-select>
          </b-form-group>
          <b-form-group id="product-url-grp"
                        label="Image URL:"
                        label-for="product-url">
            <b-form-input id="product-url"
                          type="url"
                          v-model="form.url"
                          required placeholder="Price">
            </b-form-input>
          </b-form-group>
          <b-form-group id="product-desc-grp"
                        label="Image URL:"
                        label-for="product-desc">
            <b-form-textarea id="product-desc"
                     v-model="form.description"
                     placeholder="Product Description (max 140 char.)"
                     :rows="3"
                     :max-rows="6">
            </b-form-textarea>
          </b-form-group>

          <b-button v-model="form.name" @click="showModal" variant="primary" >Create {{form.name}}</b-button>
          <b-button type="reset" variant="secondary">Reset</b-button>

          <!-- Modal -->
          <b-modal ref="checking" hide-footer title="Are you sure?">
            Hello From My Modal!
            <b-row class="mt-4">
              <b-col cols="6">
                <b-btn type="submit" variant="success" block @click="onSubmit">Submit</b-btn>
              </b-col>
              <b-col>
                <b-btn variant="outline-danger" block @click="hideModal">Cancel</b-btn>
              </b-col>
            </b-row>
          </b-modal>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'New',
  data() {
    return {
      title: 'Create New Product',
      form: {
        name: '',
        price: '',
        manufacturer: null,
        url: '',
        description: '',
        secret: 'S3CR3T',
      },
      manufacturers: [
        { text: 'Select One', value: null },
        'Samsung', 'LG', 'Hyundai', 'Daihatsu',
      ],
    };
  },
  methods: {
    showModal() {
      this.$refs.checking.show();
    },
    hideModal() {
      this.$refs.checking.hide();
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      this.hideModal();
    },
  },
};

</script>

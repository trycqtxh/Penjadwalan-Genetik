webpackJsonp([2],{231:function(t,a,e){"use strict";e.d(a,"a",function(){return n});var n="pengampu"},296:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(27),s=e(231);a.default={name:"Form",props:["id"],data:function(){return{data:{},matkul:[],dosen:[],kelas:[]}},methods:{simpan:function(){var t=this;this.$route.meta.edit?t.$http.put(n.c+"/"+s.a+"/"+t.id,this.data).then(function(a){t.$router.push({name:"pengampu-index"})}):t.$http.post(n.c+"/"+s.a,this.data).then(function(a){t.$router.push({name:"pengampu-index"})})},getdata:function(){var t=this;t.$http.get(n.c+"/"+s.a+"/"+t.id,this.data).then(function(a){Vue.set(t.$data,"data",a.data)})},getMatkul:function(){var t=this;return new Promise(function(a,e){t.$http.get(n.c+"/matakuliah?params=all").then(function(t){a(t.data)}).catch(function(t){e(t)})})},getKelas:function(){var t=this;return new Promise(function(a,e){t.$http.get(n.c+"/kelas?params=all").then(function(t){a(t.data)}).catch(function(t){e(t)})})},getDosen:function(){var t=this;return new Promise(function(a,e){t.$http.get(n.c+"/dosen?params=all").then(function(t){a(t.data)}).catch(function(t){e(t)})})}},created:function(){this.$route.meta.edit&&this.getdata();var t=this;axios.all([this.getMatkul(),this.getDosen(),this.getKelas()]).then(axios.spread(function(a,e,n){Vue.set(t.$data,"matkul",a),Vue.set(t.$data,"dosen",e),Vue.set(t.$data,"kelas",n)})).catch(function(t){console.log(t)})}}},297:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid"},[e("br"),t._v(" "),e("form",{staticClass:"form-horizontal",on:{submit:function(a){a.preventDefault(),t.simpan(a)}}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-md-2",attrs:{for:"matkul_id"}},[t._v("Matakuliah")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.matkul_id,expression:"data.matkul_id"}],staticClass:"form-control",attrs:{id:"matkul_id"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.data,"matkul_id",a.target.multiple?e:e[0])}}},t._l(t.matkul,function(a){return e("option",{domProps:{value:a.id}},[t._v(t._s(a.semester)+" - "+t._s(a.kode_mk)+" - "+t._s(a.nama))])}))])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-md-2",attrs:{for:"dosen_id"}},[t._v("Dosen")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.dosen_id,expression:"data.dosen_id"}],staticClass:"form-control",attrs:{id:"dosen_id"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.data,"dosen_id",a.target.multiple?e:e[0])}}},t._l(t.dosen,function(a){return e("option",{domProps:{value:a.id}},[t._v(t._s(a.nama))])}))])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label col-md-2",attrs:{for:"kelas_id"}},[t._v("Kelas")]),t._v(" "),e("div",{staticClass:"col-md-10"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.kelas_id,expression:"data.kelas_id"}],staticClass:"form-control",attrs:{id:"kelas_id"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.data,"kelas_id",a.target.multiple?e:e[0])}}},t._l(t.kelas,function(a){return e("option",{domProps:{value:a.id}},[t._v(t._s(a.kelas))])}))])]),t._v(" "),e("button",{staticClass:"btn btn-default pull-right"},[t._v("Simpan")])])])},staticRenderFns:[]}},358:function(t,a,e){var n=e(0)(e(296),e(297),!1,null,null,null);t.exports=n.exports}});
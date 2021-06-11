<template>
    <div>
        <el-dropdown @command="changeCompany">
            <span class="el-dropdown-link" style="color: #FFF;">
                {{company}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                    //:command是上面@command的默认参数
                <el-dropdown-item  v-for="item in companyList" :key="item.id" :command="item.user_name+'-'+item.id">{{item.user_name}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

'<p>下载模板</p><p style="color: #A1A1A1;font-size:12px;margin: 10px 0;">为提高导入的成功率，请下载并使用系统提供的模板。</p>' +
          '<button style="width:100px;height:30px;background:#F5A400;color: #fff;border-radius:2px;border:none;" id="download">下载模板</button></div>'

    open(){
              const h = this.$createElement;
        this.$msgbox({
          title: '分配审稿人',
          message: h('p', null, [
            h('el-checkbox',{class: 'choice'},'王大明'),
            h('el-checkbox',{class: 'choice'},'王大明'),
            h('el-checkbox',{class: 'choice'},'王大明'),
            h('el-checkbox',{class: 'choice'},'王大明'),
            h('el-checkbox',{class: 'choice'},'王大明'),
            h('el-checkbox',{class: 'choice'},'王大明'),
            h('el-checkbox',{class: 'choice'},'王大明'),
            
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
    }